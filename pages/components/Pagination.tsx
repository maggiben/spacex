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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   return await ssrGetLaunches.getServerPage({
//     variables: {
//       limit: 5,
//       offset: 10,
//     },
//   }, ctx);
// };

// export default withApollo(Pagination);

export default Pagination