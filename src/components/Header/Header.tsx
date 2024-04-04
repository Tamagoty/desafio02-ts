import { Center, Box, Text} from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'

export const Header  = () => {
  const context = useContext(AppContext)

  return(
    <Box bg='purple' color='#ffffff'>
      <Center>
        <Text fontSize='3xl'>Tamagoty Bank</ Text>
      </Center>
    </Box>
  )
}
