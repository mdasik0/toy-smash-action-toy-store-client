import Banner from "./Banner/Banner";
import Extraone from "./Extraone/Extraone";
import Gallery from "./Gallery/Gallery";
import SubCategory from "./SubCategory/SubCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="md:w-[1280px] mx-auto font-semibold my-10 divider">Sort by Category</div>
            <SubCategory></SubCategory>
            <div className="md:w-[1280px] mx-auto font-semibold my-10 divider">Gallery</div>
            <Gallery className='my-10'></Gallery>
            <div className="md:w-[1280px] mx-auto font-semibold my-10 divider">Featured</div>
            <Extraone className='my-10'></Extraone>
        </div>
    );
};

export default Home;