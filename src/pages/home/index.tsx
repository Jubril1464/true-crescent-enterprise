import { Layout } from "@components/page-layout";
import Button from "@components/button";
import Features from "@ui/features";
import MildSteels from "@ui/mild-steels";
import StainlessSteels from "@ui/stainless-steels";
import FabricationServices from "@src/ui/fabrication-services";
import MetalMash from "@src/ui/metal-mash";
const Home = () => {
  return (
    <Layout>
      <div className="h-[86vh] hero flex flex-col gap-5 justify-center px-5 text-white">
        <h1 className="font-semibold min-[850px]:text-[4rem] sm:text-[3rem] text-3xl min-[850px]:w-[50rem] sm:leading-[70px]">
          Your Best Steel Merchant and Partner
        </h1>
        <p className="min-[850px]:w-[50rem]">
          Providing high-quality steel materials, fabrication
          services, and maintenance solutions.
        </p>
        <div>
          <Button>View Products</Button>
        </div>
      </div>
      <Features />
      <MildSteels />
      <StainlessSteels />
      <FabricationServices />
      <MetalMash />
    </Layout>
  );
};
export default Home;
