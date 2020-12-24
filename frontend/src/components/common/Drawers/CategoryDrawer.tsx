import { ChakraField } from "@/components/common/index"
import { useCreateSubredditMutation } from "@/generated/graphql"
import { CategorySchema } from "@/types/Category/schemas"
import { CategoryInputType } from "@/types/Category/types"
import { toErrorMap } from "@/utils/toErrorMap"
import { gql } from "@apollo/client"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  useToast
} from "@chakra-ui/core"
import { Form, Formik } from "formik"
import { useRef } from "react"
import { BsFolderPlus } from "react-icons/bs"

function CreateCategoryDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const toast = useToast()

  const [createCategory] = useCreateSubredditMutation()

  const btnRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <IconButton
        variant="ghost"
        aria-label="Create a Subreddit"
        icon={<BsFolderPlus />}
        ref={btnRef}
        size="md"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create Subreddit</DrawerHeader>
          <Formik
            initialValues={CategoryInputType}
            validationSchema={CategorySchema}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(false)
              let response
              try {
                response = await createCategory({
                  variables: {
                    data: {
                      ...values
                    }
                  },
                  update(cache, { data }) {
                    if (!data?.createCategory.errors) {
                      cache.modify({
                        fields: {
                          categories(existingCategories = []) {
                            const newCategoryRef = cache.writeFragment({
                              data: data?.createCategory.category,
                              fragment: gql`
                                fragment NewCategory on Category {
                                  id
                                  name
                                }
                              `
                            })
                            return [newCategoryRef, ...existingCategories]
                          }
                        }
                      })
                    }
                  }
                })
              } catch (ex) {
                console.log(ex)
              }

              if (response?.data?.createCategory?.category) {
                toast({
                  id: "success",
                  title: `${response.data.createCategory.category.name}!`,
                  description:
                    "Your subreddit/category was created successfully.",
                  status: "success",
                  duration: 9000,
                  isClosable: true
                })
                onClose()
              } else if (response?.data?.createCategory.errors) {
                actions.setErrors(
                  toErrorMap(response.data.createCategory.errors)
                )
              }
            }}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <DrawerBody>
                    <ChakraField id="name" name="name" label="Name/Title" />
                  </DrawerBody>

                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button type="submit" isLoading={isSubmitting} color="blue">
                      Submit
                    </Button>
                  </DrawerFooter>
                </Form>
              )
            }}
          </Formik>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CreateCategoryDrawer