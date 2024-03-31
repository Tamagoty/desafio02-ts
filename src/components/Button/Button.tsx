import { 
  ChakraProvider,
} from '@chakra-ui/react'

interface FRButton {
  clickEvent: () => {},
  label: string
}


export const Button = ({clickEvent, label}: FRButton) => {
  return (
    <ChakraProvider>
      
    </ ChakraProvider>
  )
}