import useTitle from "../../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Extraone from "./Extraone/Extraone";
import Extratwo from "./Extratwo/Extratwo";
import GallerySection from "./Gallery/GallerySection";
import SubCategory from "./SubCategory/SubCategory";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <div
        data-aos="zoom-in"
        className="md:w-[1280px] mx-auto font-semibold my-10 divider"
      >
        Sort by Category
      </div>
      <SubCategory></SubCategory>
      <GallerySection className="my-10"></GallerySection>
      <div className="md:w-[1280px] mx-auto font-semibold my-10 divider">
        Featured
      </div>
      <Extraone className="my-10"></Extraone>
      <h1
        data-aos="fade-right"
        data-aos-duration="800"
        className="text-center md:py-6 py-3 text-5xl text-black font-bold fontNunito"
      >
        Customer feedback
      </h1>
      <p
        data-aos="fade-right"
        data-aos-duration="800"
        className="font-thin text-center text-black py-3 px-4"
      >
        At our toy website, we deeply value and appreciate the feedback provided
        by our customers. We believe that customer feedback is an invaluable
        source of insights that helps us understand their needs, preferences,
        and expectations. It allows us to continually improve our offerings and
        provide an exceptional experience for every visitor.
      </p>
      <Extratwo className="my-10"></Extratwo>
    </div>
  );
};

export default Home;
