import { GetServerSideProps } from "next"
import { Grid, GridItem, Text } from "@chakra-ui/react"
import { ssrGetLaunches, PageGetLaunchesComp } from "../../generated/page"
import { withApollo } from "../hooks/withApollo"

const Launches: PageGetLaunchesComp = (props) => {
  console.log('props', props?.data?.launchesPast);
  return (
    <Grid>
      {
        props?.data?.launchesPast?.map((launch, index) => {
          return (
            <GridItem key={index}>
              <Text>{launch?.mission_name}</Text>
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
    variables: { limit: 10 },
  }
})(Launches))
