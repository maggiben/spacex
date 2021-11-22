import { GetServerSideProps } from 'next'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import { ssrGetLaunches, PageGetLaunchesComp } from '../../generated/page'
import Launch from './Launch'
import { withApollo } from '../../hooks/withApollo'

const Launches: PageGetLaunchesComp = (props) => {
  console.log('props', props?.data?.launchesPast);
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={2}>
      {
        props?.data?.launchesPast?.map((launch) => {
          return (
            <GridItem key={launch?.id}>
              <Launch
                mission_name={launch?.mission_name}
                site_name_long={launch?.launch_site?.site_name}
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
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetLaunches.getServerPage({}, ctx);
}

export default withApollo(ssrGetLaunches.withPage((arg) => {
  return { 
    variables: { limit: 18 },
  }
})(Launches))
