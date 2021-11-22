import React, { useState, useEffect } from 'react';
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
import { ssrGetLaunches, PageGetLaunchesComp } from '../../generated/page'

export default function Nav() {
  const content = ssrGetLaunches.usePage();
  const [find, setFind] = useState('');

  const handleClick = () => {
    setFind('Crew-1')
  }

  useEffect(() => {
  }, [find])

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>SpaceX Explorer</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={6}>
              <InputGroup size="md">
                <Input pr="12rem" placeholder="Mission name" borderRadius="0" bg={useColorModeValue('white.500', 'gray.900')}/>
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