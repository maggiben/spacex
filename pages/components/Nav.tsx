import React, { useState, ChangeEvent, ClipboardEventHandler, KeyboardEventHandler, SyntheticEvent } from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons'
import { ssrGetLaunches } from '../../generated/page'

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [ search, setSearch ] = useState('')
  const { fetchMore } = ssrGetLaunches.usePage((arg) => {
    return {
      variables: {
        limit: 18,
        offset: 0,
        find: { mission_name: '' }
      },
    }
  });
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)
  const handlePaste = (event: ClipboardEventHandler<HTMLInputElement>) => {
    // console.log(event.clipboardData.getData('Text'));
    // const text = event.clipboardData.getData('Text')
    // setSearch(text)
  }

  const handleKeyPress = (event: SyntheticEvent<HTMLInputElement>) => {
    console.log('key:', event.key)
    // if (event.key === 'Enter') {
      // setSearch(event.target.value)
    // }
  }

  const handleClick = () => {
    fetchMore({
      variables: {
        limit: 18,
        offset: 0,
        find: { mission_name: search }
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult || fetchMoreResult?.launchesPast?.length === 0) {
          return previousResult;
        }
        return { 
          launchesPast: fetchMoreResult?.launchesPast
        }
      },
    })
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>SpaceX Explorer</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={6}>
              <InputGroup size="md">
                <Input pr="4.5rem" width="22rem" placeholder="Mission name" borderRadius="0" bg={useColorModeValue('white.500', 'gray.900')} onChange={handleChange} onPaste={handlePaste as SyntheticEvent<HTMLInputElement>} onkeypress={handleKeyPress}/>
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}><SearchIcon /></Button>
                </InputRightElement>
              </InputGroup>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Nav