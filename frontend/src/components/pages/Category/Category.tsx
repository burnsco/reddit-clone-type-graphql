import NewPost from "@/components/common/Post"
import ShowMorePosts from "@/components/pages/PostList/showMore"
import { usePostsQuery } from "@/generated/graphql"
import { NetworkStatus } from "@apollo/client"
import { Box, Text, VisuallyHidden, VStack } from "@chakra-ui/react"
import { useRouter } from "next/router"

const CategoryPosts = (): JSX.Element => {
  const router = useRouter()
  const category = router.query.category as string

  const { loading, data, fetchMore, networkStatus } = usePostsQuery({
    variables: {
      category: category,
      skip: 0,
      first: 2
    },
    notifyOnNetworkStatusChange: true
  })
  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore
  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: postsBySubreddit?.length ?? 0
      }
    })
  }

  const postsBySubreddit = data?.posts ?? []
  const _categoryPostsMeta = data?._categoryPostsMeta
  const areMorePosts =
    (postsBySubreddit?.length ?? 1) < (_categoryPostsMeta?.count ?? 0)

  const ViewPosts = () => {
    if (postsBySubreddit.length > 0) {
      return (
        <VStack spacing={4}>
          {postsBySubreddit.map((post, index) => (
            <NewPost key={`post-${post.id}-${index}`} post={post} />
          ))}
        </VStack>
      )
    }
    return <Text>No posts here.</Text>
  }

  if (loading && !loadingMorePosts) {
    return <VisuallyHidden>loading</VisuallyHidden>
  }

  return (
    <Box as="section">
      <ViewPosts />
      <ShowMorePosts
        loadMorePosts={loadMorePosts}
        areMorePosts={areMorePosts}
        loadingMorePosts={loadingMorePosts}
      />
    </Box>
  )
}

export default CategoryPosts
