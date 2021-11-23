import { SimpleGrid, Spinner, Box } from '@chakra-ui/react'
import { PageGetLaunchesComp } from '../../generated/page'
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
      <SimpleGrid minChildWidth="200px" columns={6} spacing="40px" gap={2}>
        {
          props?.data?.launchesPast?.map((launch) => {
            return (
              <Box key={launch?.id}>
                <Launch
                  mission_name={launch?.mission_name}
                  site_name={launch?.launch_site?.site_name}
                  launch_date_local={launch?.launch_date_local}
                  links={launch?.links}
                  rocket_name={launch?.rocket?.rocket_name}
                  details={launch?.details}
                />
              </Box>
            )
          })
        }
      </SimpleGrid>
      <Pagination />
    </>
  )
}

export default Launches

