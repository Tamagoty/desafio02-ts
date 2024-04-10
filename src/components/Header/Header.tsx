import { Center, Box, Text, Flex, Spacer, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false })
    setIsLoggedIn(false)
    navigate('/')

  }

  return (
    <Flex bg='purple' padding='5px'>
      <Box color='#ffffff'>
        <Center>
          <Text fontSize='3xl'>Tamagoty Bank</ Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button onClick={() => logout()}>
              Sair
            </Button></>
        )
      }
    </Flex>

  )
}
