// Imports
import Hero from "@/components/hero/hero";
import Footer from "@/components/footer/footer";
import Explore from "@/components/explore/explore";
import ApiDocs from "@/components/api-docs/api-docs";
import Features from "@/components/features/features";

const Home = () => {
  return (
    <>
      <Hero />
      <Explore />
      <Features />
      <ApiDocs />
      <Footer />
    </>
  );
};

export default Home;
