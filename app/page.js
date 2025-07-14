import Banner from "../components/Banner";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/Contact";
import UnifiedBackground from "@/components/UnifiedBackground";

const Page = () => (
  <>
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <UnifiedBackground>
        <Header />

        <Banner />

        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
      </UnifiedBackground>
    </div>
  </>
);

export default Page;
