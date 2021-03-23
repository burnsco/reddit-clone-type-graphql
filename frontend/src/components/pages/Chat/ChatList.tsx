import { Avatar, Box, Flex, List, ListItem, Spacer } from "@chakra-ui/react"
import React, { useEffect } from "react"

export default function ChatList(props: any) {
  const { handleSubscription } = props
  const { data, loading } = props

  console.log("chat list")
  console.log(props)

  useEffect(() => {
    handleSubscription()
  })

  const messagesEndRef = React.useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [data])

  if (!loading && data && data.messages) {
    return (
      <Box overflowY="auto">
        <List mt={2} spacing={3}>
          {data.messages.map((message: any) => (
            <ListItem key={message.id}>
              <Flex>
                <Avatar
                  size="xs"
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                  mr={3}
                />
                {message.content}
                <Spacer />
                {new Date(message.createdAt).toLocaleTimeString()}
              </Flex>
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </Box>
    )
  }
  return <>No messages yet</>
}
