import { ChakraField } from "@/components/common/index"
import { useAddFriendMutation } from "@/generated/graphql"
import { useLoggedInUser } from "@/hooks/useLoggedInUser"
import { gql } from "@apollo/client"
import {
  Button,
  chakra,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  useToast
} from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { useRef } from "react"
import { FaUserFriends } from "react-icons/fa"

export default function AddFriendDrawer() {
  const [loggedInUser] = useLoggedInUser()
  const drawerBg = useColorModeValue("whitesmoke", "gray.900")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const buttonColor = useColorModeValue("purple", "blue")
  const [addFriend, { data, loading }] = useAddFriendMutation()
  const btnRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <Tooltip
        hasArrow
        label="Add Friend"
        fontSize="md"
        bg="black"
        color="whitesmoke"
      >
        <chakra.span>
          <IconButton
            variant="ghost"
            aria-label="Add Friend"
            icon={<FaUserFriends size="1.5em" />}
            ref={btnRef}
            size="md"
            onClick={onOpen}
          />
        </chakra.span>
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={drawerBg}>
          <DrawerCloseButton />
          <DrawerHeader>Add Friend</DrawerHeader>
          <Formik
            initialValues={{ username: "" }}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(false)
              let response
              try {
                response = await addFriend({
                  variables: {
                    data: {
                      username: values.username
                    }
                  },
                  update(cache, { data }) {
                    if (loggedInUser) {
                      cache.modify({
                        id: cache.identify(loggedInUser),
                        fields: {
                          friends(existingFriends = []) {
                            const newFriendRef = cache.writeFragment({
                              data: data?.addFriend.user,
                              fragment: gql`
                                fragment NewFriend on User {
                                  id
                                  username
                                }
                              `
                            })
                            return [newFriendRef, ...existingFriends]
                          }
                        }
                      })
                    }
                    return null
                  }
                })
              } catch (ex) {
                console.log(ex)
              }
              if (
                response &&
                response.data &&
                response.data.addFriend &&
                response.data.addFriend.user
              ) {
                const { user } = response.data.addFriend
                toast({
                  id: `user-${user.id}-added`,
                  title: "Sucess",
                  description: `User '${user}' is now your friend `,
                  status: "success",
                  duration: 9000,
                  isClosable: true
                })
                onClose()
              }
            }}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <DrawerBody>
                    <ChakraField
                      id="username"
                      name="username"
                      label="Username"
                    />
                  </DrawerBody>

                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      isLoading={isSubmitting || loading}
                      colorScheme={buttonColor}
                    >
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
