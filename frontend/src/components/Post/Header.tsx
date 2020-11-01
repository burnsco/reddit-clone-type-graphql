import { timeDifferenceForDate } from "@/utils/timeDifferenceForDate"
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/core"
import { useRouter } from "next/router"
import React from "react"
import { FiEdit } from "react-icons/fi"
import { DeletePostDialog } from "../shared/DeletePostDialog"
import { NextChakraLink } from "../shared/NextChakraLink"
import PostCategory from "./Category"

const PostHeader: React.FC<{
  category?: string | null
  author?: string | null
  createdAt?: string | null
  postId?: string | null | undefined
}> = ({ category, author, createdAt, postId }) => {
  const fontColor = useColorModeValue("#1A1A1B", "gray.200")
  const router = useRouter()
  return (
    <HStack
      fontSize="sm"
      color={fontColor}
      w="full"
      h="10px"
      mt={1}
      flexGrow={1}
    >
      <HStack>
        <PostCategory category={category} />
        <Box ml="2" textDecoration="none">
          Posted by{" "}
          <Box
            onClick={() => router.push(`/user/${author}`)}
            fontWeight="500"
            display="inline"
            color="gray.400"
            _hover={{
              textDecoration: "underline",
              cursor: "pointer"
            }}
          >
            {author}
          </Box>
          <Box display="inline" ml="2">
            {timeDifferenceForDate(Number(createdAt))}
          </Box>
        </Box>
      </HStack>
      <Spacer />
      {postId && (
        <Flex mr={1}>
          <NextChakraLink href="/post/edit/[id]" as={`/post/edit/${postId}}`}>
            <Tooltip
              placement="bottom"
              hasArrow
              label="Edit Post"
              bg="gray.200"
              color="black"
            >
              <IconButton
                mr={2}
                size="xs"
                aria-label="Edit Post"
                icon={<FiEdit />}
              />
            </Tooltip>
          </NextChakraLink>
          <DeletePostDialog postId={postId} category={category} />
        </Flex>
      )}
    </HStack>
  )
}

export default PostHeader
