import { Box, Text} from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string,
  content: string
}

const CardInfo = ({ mainContent, content } : ICardInfo) => {
  return (
    <Box
      backgroundColor='white'
      width={320}
      padding={8}
      minHeight='25vh'
      borderRadius='25px'
    >
      <Text fontSize='2xl' fontWeight='bold'>{mainContent}</Text>
      <Text fontSize='sl'>{content}</Text>
    </Box>
  )
}

export default CardInfo;