import { Skeleton, Spinner, Stack } from '@chakra-ui/core'
import React from 'react'
import { useAllPostsQuery } from '../../generated/graphql'
import PostComponent from '.'

const PostsPageWithData: React.FC = () => {
  const { loading, error, data } = useAllPostsQuery()

  if (error) {
    return <div>error loading posts</div>
  }

  if ((data && data.posts !== null) || 'undefined') {
    return (
      <Skeleton startColor="pink" endColor="orange" isLoaded={!loading}>
        <Stack spacing={8}>
          {data?.posts?.map(post => (
            <PostComponent key={`post-${post.id}`} post={post} />
          ))}
        </Stack>
      </Skeleton>
    )
  } else {
    return <Spinner />
  }
}

export default PostsPageWithData
