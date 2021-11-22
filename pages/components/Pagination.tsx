import { Button, Flex, Box, Spacer } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const Pagination = () => {
  return (
    <Flex>
      <Box p="4">
        <Button h="1.75rem" size="sm"><ChevronLeftIcon /></Button>
      </Box>
      <Spacer />
      <Box p="4">
        <Button h="1.75rem" size="sm"><ChevronRightIcon /></Button>
      </Box>
    </Flex>
  )
}

export default Pagination
