import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import SubCategory from "./SubCategory/SubCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="md:w-[1280px] mx-auto font-semibold my-10 divider">Sort by Category</div>
            <SubCategory></SubCategory>
            <div className="md:w-[1280px] mx-auto font-semibold my-10 divider">Gallery</div>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;