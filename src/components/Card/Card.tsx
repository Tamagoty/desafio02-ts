import { Box, Center, Input } from "@chakra-ui/react"
import DButton from "../Button/Button"
import { login } from "../../services/login"
import { useState, useEffect } from "react"
import { api } from "../../api"

interface UserData {
  email: string,
  password: string,
  name: string
}

export const Card = () => {
  const [email, setEmail] = useState<string>('')
  const [userData, setUserData] = useState<null | UserData>()

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    getData()
  }, [])

  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login </h1>
      </Center>
      <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <Input placeholder="password" />
      <Center>
        <DButton
          onClick={() => login(email)}
        />
      </Center>
    </Box>
  )
}