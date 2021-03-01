import { Post, useDeletePostMutation } from "@/generated/graphql"
import { sleep } from "@/utils/sleepy"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton
} from "@chakra-ui/react"
import { useRef, useState } from "react"
import { AiFillDelete } from "react-icons/ai"

export const DeletePostDialog: React.FC<{
  postId?: string | null
  post: Post
}> = ({ postId, post }) => {
  const [deletePost, { client }] = useDeletePostMutation()
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef<null | HTMLButtonElement>(null)

  if (postId) {
    return (
      <>
        <IconButton
          onClick={() => setIsOpen(true)}
          size="xs"
          aria-label="Delete Comment"
          icon={<AiFillDelete />}
        />

        <AlertDialog
          returnFocusOnClose={false}
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader
                color="red.400"
                fontSize="lg"
                fontWeight="bold"
              >
                Delete Comment
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You cannot undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  onClick={async () => {
                    sleep(1000)
                    await deletePost({
                      variables: {
                        data: {
                          postId
                        }
                      },
                      update(cache, { data }) {
                        if (data?.deletePost) {
                          cache.modify({
                            id: cache.identify(post),
                            fields: {
                              comments(existingCommentRefs, { readField }) {
                                return existingCommentRefs.filter(
                                  (commentRef: any) =>
                                    postId !== readField("id", commentRef)
                                )
                              }
                            }
                          })
                        }
                        return null
                      }
                    })
                    onClose()
                  }}
                  colorScheme="red"
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }
  return null
}
