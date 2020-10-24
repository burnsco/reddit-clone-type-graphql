import { useEffect } from "react"
import { useIsUserOrEmailTakenLazyQuery } from "../generated/graphql"

type userEmailProps = {
  username: string
  email: string
}

export const useIsValid = (props: userEmailProps) => {
  const [checkIfValid, { data }] = useIsUserOrEmailTakenLazyQuery()

  useEffect(() => {
    checkIfValid({
      variables: {
        data: { username: props.username, email: props.email }
      }
    })
  }, [checkIfValid, props.email, props.username])

  if (data && data.isUserOrEmailTaken.errors) {
    return data.isUserOrEmailTaken.errors
  }

  return false
}