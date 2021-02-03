import { Layout } from "@/components/ui/index"
import { useMeQuery } from "@/generated/graphql"
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  VisuallyHidden
} from "@chakra-ui/react"

const MePage = (): JSX.Element => {
  const { data, loading } = useMeQuery()
  const bg = useColorModeValue("white", "#1A1A1B")

  if (loading) return <VisuallyHidden>Loading your profile</VisuallyHidden>

  return (
    <Layout title="Me">
      <Box bg={bg}>
        <Heading>User</Heading>
        <Text>Username: {data?.me?.username} </Text>
        <Text>Email: {data?.me?.email}</Text>
        <Text>About Me: {data?.me?.about}</Text>
      </Box>
    </Layout>
  )
}

export default MePage
