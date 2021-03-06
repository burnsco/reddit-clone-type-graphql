import {
  useCategoriesLazyQuery,
  useJoinChatRoomMutation,
  useMyChatRoomsLazyQuery
} from "@/generated/graphql"
import { selectedChatRoomId, selectedChatRoomName } from "@/lib/apolloClient"
import { useReactiveVar } from "@apollo/client"
import {
  Alert,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  useColorModeValue
} from "@chakra-ui/react"
import React, { useEffect } from "react"
import { BsArrowDown, BsArrowLeft } from "react-icons/bs"
import { FaHome } from "react-icons/fa"

export default function ChatSelection() {
  const bg = useColorModeValue("white", "#202020")

  const chatID = useReactiveVar(selectedChatRoomId)
  const chatName = useReactiveVar(selectedChatRoomName)

  const [
    fetchCategories,
    { data: categoriesData, loading: loadingCategories, error: categoriesError }
  ] = useCategoriesLazyQuery()

  const [
    fetchMyChatRooms,
    { data: myChatRooms, loading: loadingMyChatRooms }
  ] = useMyChatRoomsLazyQuery({
    ssr: false
  })
  const [joinChatRoom] = useJoinChatRoomMutation()

  useEffect(() => fetchCategories(), [fetchCategories])
  useEffect(() => fetchMyChatRooms(), [fetchMyChatRooms])

  console.log("my chat rooms")
  console.log(myChatRooms)

  if (!categoriesError && !loadingMyChatRooms) {
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
                {loadingCategories ? "Loading..." : chatName}
              </MenuButton>
              {categoriesData && categoriesData.categories && (
                <MenuList minWidth="240px" opacity="0.7" bg={bg}>
                  <MenuOptionGroup title="subreddits">
                    {categoriesData.categories.map(item => (
                      <MenuItem
                        value={item.name}
                        key={`chat-selection-${item.id}}`}
                        onClick={async () => {
                          if (item && item.name && item.id) {
                            selectedChatRoomId(Number(item.id))
                            selectedChatRoomName(item.name)
                            if (myChatRooms && myChatRooms.myChatRooms) {
                              const joined = myChatRooms.myChatRooms.find(
                                el => el.id == item.id
                              )

                              console.log("isjoined")
                              console.log(joined)
                              if (joined === undefined) {
                                await joinChatRoom({
                                  variables: {
                                    data: {
                                      name: item.name
                                    }
                                  }
                                })
                              }
                            }
                          }
                        }}
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
  return <Alert>Error Loading Subreddits</Alert>
}
