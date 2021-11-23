import React, { useState, useEffect } from 'react'
import { Button, Flex, Box, Spacer } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { ssrGetLaunches } from '../../generated/page'


const Pagination = () => {
  const [ offset, setOffset ] = useState(0)
  const { fetchMore } = ssrGetLaunches.usePage((arg) => {
    return {
      variables: {
        limit: 18,
        offset: 0,
        find: { mission_name: '' }
      },
    }
  });
  
  const handleClick = (advance: boolean) => {
    if (!advance && offset > 0) {
      setOffset(offset - 10)
    } else if (advance) {
      setOffset(offset + 10)
    }
  }

  useEffect(() => {
    fetchMore({
      variables: {
        limit: 18,
        offset,
        find: { mission_name: '' }
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
  }, [offset, fetchMore])

  return (
    <Flex>
      <Box p="4">
        <Button h="1.75rem" size="sm" onClick={() => handleClick(false)}><ChevronLeftIcon /></Button>
      </Box>
      <Spacer />
      <Box p="4">
        <Button h="1.75rem" size="sm" onClick={() => handleClick(true)}><ChevronRightIcon /></Button>
      </Box>
    </Flex>
  )
}

export default Pagination