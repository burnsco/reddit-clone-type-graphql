import { ChakraField } from "@/components/common/index"
import { Wrapper } from "@/components/common/wrapper"
import Layout from "@/components/ui/Layout"
import { MeDocument, MeQuery, useRegisterMutation } from "@/generated/graphql"
import { RegisterSchema } from "@/types/User/schemas"
import { RegisterUserInputType } from "@/types/User/types"
import {
  Box,
  Button,
  useColorModeValue,
  useToast,
  VisuallyHidden
} from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { useRouter } from "next/router"
import convertToErrorMap from "../../../utils/toErrorMap"

const RegisterPage: React.FC = (): JSX.Element => {
  const bg = useColorModeValue("white", "#1A1A1B")
  const router = useRouter()
  const toast = useToast()
  const [register, { loading: registerAttempt }] = useRegisterMutation()

  if (registerAttempt)
    return <VisuallyHidden>Attempting to Register...</VisuallyHidden>

  return (
    <Layout title="Register">
      <Box shadow="sm" borderWidth="1px" rounded="md" bg={bg} p={2}>
        <Wrapper variant="small">
          <Formik
            initialValues={RegisterUserInputType}
            validationSchema={RegisterSchema}
            onSubmit={async (values, { setErrors }) => {
              const response = await register({
                variables: {
                  data: {
                    ...values
                  }
                },
                update: (cache, { data }) => {
                  cache.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                      __typename: "Query",
                      me: data?.register.user
                    }
                  })
                }
              })
              if (response.data?.register?.user) {
                toast({
                  id: `${response.data.register.user.username}-toast`,
                  title: `Welcome ${response.data.register.user.username}!`,
                  description: "Your account was created successfully.",
                  status: "success",
                  duration: 9000,
                  isClosable: true
                })
                router.push("/")
              } else if (response.data?.register.errors) {
                setErrors(convertToErrorMap(response.data.register.errors))
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <ChakraField name="email" placeholder="email" label="Email" />
                <Box my="4">
                  <ChakraField
                    name="username"
                    placeholder="username"
                    label="Username"
                  />
                </Box>
                <Box my="4">
                  <ChakraField
                    name="password"
                    placeholder="password"
                    label="Password"
                    type="password"
                  />
                </Box>
                <Button
                  mt={4}
                  colorScheme="red"
                  type="submit"
                  isDisabled={isSubmitting}
                  isLoading={isSubmitting}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Box>
    </Layout>
  )
}

export default RegisterPage
