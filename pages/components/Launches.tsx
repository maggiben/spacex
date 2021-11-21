import { ssrGetLaunches, PageGetLaunchesComp } from "../generated/page";
import { withApollo } from "../hooks/withApollo";
import { GetServerSideProps } from "next";

const Launches: PageGetLaunchesComp = (props) => {
  console.log('props', props);
  return (
    <div>
      {
        props?.data?.launchesPast?.map((launch, index) => {
          <div key={index}>{launch?.mission_name}</div>
        })
      }
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log('ctx', ctx);
  return await ssrGetLaunches.getServerPage({}, ctx);
};

export default withApollo(ssrGetLaunches.withPage((arg) => {
  return { 
    variables: { limit: 10 },
  }
})(Launches));
