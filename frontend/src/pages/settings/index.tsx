import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/core"
import Layout from "@components/layout"
import * as React from "react"

const SettingsPage: React.FunctionComponent<{}> = () => {
  return (
    <Layout>
      <Heading>Settings Page</Heading>
      <Tabs>
        <TabList>
          <Tab>Account</Tab>
          <Tab>Profile</Tab>
          <Tab>Chat & Messaging</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Email address</p>
          </TabPanel>
          <TabPanel>
            <p>Change password</p>
          </TabPanel>
          <TabPanel>
            <p>delete account</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}

export default SettingsPage
