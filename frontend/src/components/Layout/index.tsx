import { CategoriesDocument } from "@/generated/graphql"
import { initializeApollo } from "@/lib/apolloClient"
import { Box, Stack, useColorModeValue } from "@chakra-ui/core"
import { GetStaticProps } from "next"
import SideMenu from "./SideMenu"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const bg = useColorModeValue("gray.200", "black")
  return (
    <>
      <Box minH="100vh" bg={bg}>
        <Stack isInline spacing={8} mx={"auto"} py="6em" px={4}>
          <Box as="main" width="100%">
            {children}
          </Box>

          <Box
            width="200px"
            display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          >
            <SideMenu />
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CategoriesDocument
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

export default Layout
