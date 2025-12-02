// Imports
import Hero from "@/components/hero/hero";
import Explore from "@/components/explore/explore";
import ApiDocs from "@/components/api-docs/api-docs";
import Features from "@/components/features/features";
import PinnedUntilFooter from "@/components/footer/pinned-until-footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Explore />
      <Features />
      <PinnedUntilFooter>
        <ApiDocs />
      </PinnedUntilFooter>
    </>
  );
};

export default Home;
