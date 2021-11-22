import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next'
import { Button, Flex, Box, Spacer } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { ssrGetLaunches, PageGetLaunchesComp } from '../../generated/page'
import { withApollo } from '../../hooks/withApollo'

const Pagination = () => {
  const content = ssrGetLaunches.usePage();
  const [offset, setOffset] = useState(0)

  const handleClick = (advance: boolean) => {
    if (!advance && offset > 0) {
      setOffset(offset - 10)
    } else if (advance) {
      setOffset(offset + 10)
    }
  }

  useEffect(() => {
    content.fetchMore({
      variables: {
        limit: 10,
        offset
      },
    })
  }, [offset])

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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   console.log('ctx', ctx)
//   return await ssrGetLaunches.getServerPage({
//     variables: {
//       limit: 5,
//     },
//   }, ctx);
// }

// export default withApollo(ssrGetLaunches.withPage((arg) => {
//   console.log('arg', arg);
//   return { 
//     variables: { limit: 18 },
//   }
// })(Pagination))

export default Pagination