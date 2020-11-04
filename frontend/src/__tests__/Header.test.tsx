import Header from "@/components/Header"
import { render } from "@/utils/test-utils"
import { gql, InMemoryCache } from "@apollo/client"
import { MockedProvider } from "@apollo/client/testing"
import "@testing-library/jest-dom"
import { screen } from "@testing-library/react"
import preloadAll from "../lib/jest-next-dynamic/index"

const notSignedInCache = new InMemoryCache()
notSignedInCache.writeQuery({
  query: gql`
    query MeQuery {
      me {
        id
        username
      }
    }
  `,
  data: {
    me: {
      __typename: "User",
      id: null,
      username: null
    }
  }
})

const signedInCache = new InMemoryCache()
signedInCache.writeQuery({
  query: gql`
    query MeQuery {
      me {
        id
        username
        email
      }
    }
  `,
  data: {
    me: {
      __typename: "User",
      id: "1",
      username: "Corey",
      email: "coreymburns@gmail.com"
    }
  }
})
beforeAll(async () => {
  await preloadAll()
})

describe("Header", () => {
  it("renders basic navbar layout when not logged in", async () => {
    render(
      <MockedProvider cache={notSignedInCache}>
        <Header />
      </MockedProvider>
    )

    await screen.findByRole("button", { name: /register/i })
    await screen.findByRole("button", { name: /login/i })
    expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument
  })

  it("renders the username of logged in user in navbar", async () => {
    render(
      <MockedProvider cache={signedInCache}>
        <Header />
      </MockedProvider>
    )

    const user = await screen.findByText(/Corey/i)
    expect(user).toBeInTheDocument
  })

  it("renders home, submit, category buttons", async () => {
    render(
      <MockedProvider cache={signedInCache}>
        <Header />
      </MockedProvider>
    )

    await screen.findByRole("button", { name: /create post/i })
    await screen.findByText(/reddit/i)
    await screen.findByRole("button", { name: /create subreddit/i })
    expect(screen.getByRole("button", { name: /create post/i }))
      .toBeInTheDocument
    expect(screen.getByRole("button", { name: /reddit/i })).toBeInTheDocument
    expect(screen.getByRole("button", { name: /create subreddit/i }))
      .toBeInTheDocument
  })
})
