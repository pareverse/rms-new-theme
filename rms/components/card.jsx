import { Box } from '@chakra-ui/react'

const Card = (props) => {
	return <Box bg="bg-surface" borderRadius="lg" shadow="rgba(149, 157, 165, 0.1) 0 4px 16px" overflow="hidden" _dark={{ shadow: 'none' }} {...props} />
}

export default Card
