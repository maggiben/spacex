import { Button, Flex, Box, Spacer } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import getUriWithParam from '../../util/getUriWithParam'

const Pagination = () => {
  const handleClick = () => {
    const baseUrl = window.location.href
    const urlWithParam = getUriWithParam(baseUrl, { offset: '10' })
    console.log('urlWithParam', urlWithParam)
  }
  return (
    <Flex>
      <Box p="4">
        <Button h="1.75rem" size="sm" onClick={handleClick}><ChevronLeftIcon /></Button>
      </Box>
      <Spacer />
      <Box p="4">
        <Button h="1.75rem" size="sm" onClick={handleClick}><ChevronRightIcon /></Button>
      </Box>
    </Flex>
  )
}

export default Pagination