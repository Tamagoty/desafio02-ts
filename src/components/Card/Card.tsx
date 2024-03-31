import { Box, Center, Input } from "@chakra-ui/react"
import DButton from "../Button/Button"
import { login } from "../../services/login"
import { useState } from "react"

export const Card = () => {
const [email, setEmail] = useState('')

  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <Input placeholder="password" />
        <Center>
          <DButton
            onClick={() => login(email)}
          />
        </Center>
      </Box>
    </Box>)
}