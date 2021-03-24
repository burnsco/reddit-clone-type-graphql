import { useEditPostMutation } from "@/generated/graphql"
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  Link,
  Skeleton,
  Stack,
  Text
} from "@chakra-ui/react"
import Image from "next/image"
import { memo } from "react"

type PostBodyType = {
  title?: string | null
  text?: string | null
  link?: string | null
  image?: string | null
  postId?: string | null | undefined
}

const PostBody: React.FC<PostBodyType> = ({
  title,
  text,
  postId,
  link,
  image
}): JSX.Element => {
  const [editPost, { loading: submittingEditedPost }] = useEditPostMutation()

  // #TODO optimize this so can use on title, text or link
  function EditItemControls({ title, text, link, postId }: PostBodyType) {
    if (title || text || link) {
      if (postId) {
        return (
          <Heading fontWeight="500" fontSize="xl" px={1}>
            <Editable
              defaultValue={title || "Error"}
              submitOnBlur
              onSubmit={async props => {
                try {
                  const response = await editPost({
                    variables: {
                      data: {
                        title: props,
                        postId: Number(postId)
                      }
                    }
                  })
                } catch (error) {
                  console.log(error)
                }
              }}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Heading>
        )
      }
      return (
        <Heading fontWeight="500" fontSize="xl" p={2}>
          {title}
        </Heading>
      )
    }
    return null
  }

  return (
    <Stack flexGrow={2} width="100%">
      <Skeleton isLoaded={!submittingEditedPost}>
        <EditItemControls title={title} postId={postId} />
      </Skeleton>

      {image ? (
        <Box pos="relative" minW="full" minH="260px">
          <Image
            layout="fill"
            objectFit="cover"
            src={image}
            alt={`image-${title}`}
          />
        </Box>
      ) : null}

      {text ? (
        <Text fontSize="sm" mt={2} noOfLines={4}>
          {text}
        </Text>
      ) : null}

      {link ? (
        <Box mt={1}>
          <Link href={`${link}`}>{link}</Link>
        </Box>
      ) : null}
    </Stack>
  )
}

export default memo(PostBody)
