import { GetServerSideProps } from 'next'
import { Grid, GridItem, Spinner } from '@chakra-ui/react'
import { withApollo } from '../../hooks/withApollo'
import { ssrGetLaunches, PageGetLaunchesComp } from '../../generated/page'
import Launch from './Launch'
import Pagination from './Pagination'

const Launches: PageGetLaunchesComp = (props) => {
  if (!props?.data?.launchesPast) {
    return (
      <Spinner />
    )
  }
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap={2}>
        {
          props?.data?.launchesPast?.map((launch) => {
            return (
              <GridItem key={launch?.id}>
                <Launch
                  mission_name={launch?.mission_name}
                  site_name={launch?.launch_site?.site_name}
                  launch_date_local={launch?.launch_date_local}
                  links={launch?.links}
                  rocket_name={launch?.rocket?.rocket_name}
                  details={launch?.details}
                />
              </GridItem>
            )
          })
        }
      </Grid>
      <Pagination />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetLaunches.getServerPage({}, ctx);
}

export default withApollo(ssrGetLaunches.withPage((arg) => {
  return { 
    variables: { limit: 18 },
  }
})(Launches))
