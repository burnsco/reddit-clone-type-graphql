import { usePostsQuery } from "@/generated/graphql"
import { allPostsQueryVars } from "@/types/pagination"
import { NetworkStatus } from "@apollo/client"
import { Box, Text, VStack } from "@chakra-ui/core"
import { useEffect, useState } from "react"
import NewPost from "../Post"
import ShowMorePosts from "./showMore"

const PostList = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [isMounted])

  const { loading, data, error, fetchMore, networkStatus } = usePostsQuery({
    variables: allPostsQueryVars,
    notifyOnNetworkStatusChange: true,
    skip: !isMounted
  })
  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  if (error) return <div>error loading posts</div>

  if (loading && !loadingMorePosts) {
    return <div>loading...</div>
  }

  const allPosts = data?.posts ?? []
  const _allPostsMeta = data?._allPostsMeta
  const areMorePosts = (allPosts?.length ?? 1) < (_allPostsMeta?.count ?? 0)

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: data?.posts?.length ?? 0
      }
    })
  }

  const ViewPosts = () => {
    if (allPosts.length > 0) {
      return (
        <VStack spacing={4}>
          {allPosts.map((post, index) => (
            <NewPost key={`post-${post.id}-${index}`} post={post} />
          ))}
        </VStack>
      )
    }
    return <Text>No posts here.</Text>
  }

  if (isMounted) {
    return (
      <Box>
        <ViewPosts />
        <ShowMorePosts
          loadMorePosts={loadMorePosts}
          areMorePosts={areMorePosts}
          loadingMorePosts={loadingMorePosts}
        />
      </Box>
    )
  }
  return null
}

export default PostList
