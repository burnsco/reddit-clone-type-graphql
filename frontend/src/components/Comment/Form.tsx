import { gql } from "@apollo/client"
import { Box, Button, FormControl, Skeleton, Textarea } from "@chakra-ui/core"
import { useCreateCommentMutation } from "@generated/graphql"
import { Field, Formik } from "formik"
import * as React from "react"

interface CreateSubredditProps {
  postId: string
  body: string
}

const SubmitCommentForm: React.FC<{ postId: string }> = ({ postId }) => {
  const [
    submitComment,
    { data, loading: mutationLoading, error: mutationError }
  ] = useCreateCommentMutation()

  const handleSubmit = (values: CreateSubredditProps) => {
    submitComment({
      variables: {
        data: {
          postId: values.postId,
          body: values.body
        }
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            comments(existingComments = []) {
              const newCommentRef = cache.writeFragment({
                data: data?.createComment?.comment,
                fragment: gql`
                  fragment NewComment on Comment {
                    id
                    name
                  }
                `
              })
              return [newCommentRef, ...existingComments]
            }
          }
        })
      }
    })
  }

  return (
    <Box>
      <Skeleton isLoaded={!mutationLoading}>
        <Formik
          initialValues={{ body: "", postId: postId }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              actions.setSubmitting(false)
              handleSubmit(values)
            }, 1000)
          }}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>
              <Field name="body">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.body && form.touched.body}
                  >
                    <Textarea {...field} id="body" placeholder="body" />
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={formik.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
        {mutationError && <p>Error: ( Please try again</p>}
      </Skeleton>
    </Box>
  )
}

export default SubmitCommentForm