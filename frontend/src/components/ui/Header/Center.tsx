import { useCategoriesQuery } from "@/generated/graphql"
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  SkeletonText,
  useColorModeValue
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { BsArrowDown, BsArrowLeft } from "react-icons/bs"
import { FaHome } from "react-icons/fa"

function HeaderNavigation() {
  const router = useRouter()

  const { loading, data } = useCategoriesQuery()

  const bg = useColorModeValue("white", "#202020")

  const renderPath = () => {
    if (router && router.pathname) {
      if (router.pathname === "/") {
        return "Home"
      } else if (!router.query.category) {
        return `${router.asPath}`
      } else {
        return `${router.query.category}`
      }
    }
    return "Home"
  }

  if (!loading) {
    return (
      <Flex flexGrow={2}>
        <Menu closeOnSelect={true}>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={Button}
                mr={4}
                maxW="280px"
                fontSize="sm"
                textAlign="left"
                w="full"
                leftIcon={<FaHome />}
                rightIcon={isOpen ? <BsArrowDown /> : <BsArrowLeft />}
                variant="outline"
              >
                {renderPath()}
              </MenuButton>
              {data && data.categories && (
                <MenuList minWidth="240px" opacity="0.7" bg={bg}>
                  <MenuOptionGroup title="subreddits">
                    {data.categories.map((item, i) => (
                      <MenuItem
                        value={item.name}
                        key={`subreddit-center-menu-${item.id}-${i}`}
                        onClick={() => router.push(`/r/${item.name}`)}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              )}
            </>
          )}
        </Menu>
      </Flex>
    )
  }
  return <SkeletonText />
}

export default HeaderNavigation