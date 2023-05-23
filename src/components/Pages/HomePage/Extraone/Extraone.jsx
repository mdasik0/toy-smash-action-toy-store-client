import { FaEllipsisH, FaRegEye, FaShoppingCart } from "react-icons/fa";

const Extraone = () => {
  return (
    <div className="md:py-10 md:w-[100vw] w-full bg-slate-600">
      <h1 data-aos="fade-right" data-aos-duration="800"  className="text-center text-5xl text-white pt-8 font-bold fontNunito">New Toys Collection</h1>
      <p data-aos="fade-right" data-aos-duration="800"  className="text-center fontNunito text-white py-6 font-thin">  We&apos;ve handpicked the latest and most captivating toys to bring smiles and endless fun to children of all ages.</p>
      <div className="md:w-[1280px] w-full flex flex-col md:flex-row gap-10  justify-center mx-auto items-center  ">
        {/* card */}
          <div data-aos="zoom-in" data-aos-duration="800" className="w-[270px] hover:-translate-y-1 duration-700 relative h-[426px]">
            <div className=" absolute bottom-14 left-0 right-0 duration-1000 hover:-translate-y-9">
                <div className="flex justify-center items-center text-red-500 bg-white">
                   <FaEllipsisH></FaEllipsisH>
                </div>
                <div className="flex ">

                <div data-tip="Buy Now" className="w-1/2 py-3 tooltip tooltip-top flex justify-center bg-blue-300">
                  <FaShoppingCart></FaShoppingCart>
                </div>
                <div data-tip="View" className="w-1/2 py-3 tooltip tooltip-top flex justify-center bg-green-300">
                  <FaRegEye></FaRegEye>
                </div>
                </div>
            </div>
              <div className="h-1/4 p-3 absolute bottom-0 left-0 right-0 rounded-b-lg bg-yellow-200">
                <h1 className="fontNunito">Ironman FunkoPop</h1>
                <h4 className="fontNunito font-bold text-slate-700">$49</h4>
              </div>
              <div className="h-3/4 rounded-t-lg bg-slate-100">
                <img className="duration-700 hover:overflow-hidden" src="/img_ex_1.png" alt="" />
              </div>
          </div>
          {/* Card ends */}
        {/* card */}
          <div data-aos="zoom-in" data-aos-duration="800"  className="w-[270px] hover:-translate-y-1 duration-700 relative h-[426px]">
            <div className=" absolute bottom-14 left-0 right-0 duration-1000 hover:-translate-y-9">
                <div className="flex justify-center items-center text-red-500 bg-white">
                   <FaEllipsisH></FaEllipsisH>
                </div>
                <div className="flex ">

                <div data-tip="Buy Now" className="w-1/2 py-3 tooltip tooltip-top flex justify-center bg-blue-300">
                  <FaShoppingCart></FaShoppingCart>
                </div>
                <div data-tip="View" className="w-1/2 py-3 tooltip tooltip-top flex justify-center bg-green-300">
                  <FaRegEye></FaRegEye>
                </div>
                </div>
            </div>
              <div className="h-1/4 p-3 absolute bottom-0 left-0 right-0 rounded-b-lg bg-yellow-200">
                <h1 className="fontNunito">Spider Man FunkoPop</h1>
                <h4 className="fontNunito font-bold text-slate-700">$19</h4>
              </div>
              <div className="h-3/4 rounded-t-lg bg-slate-100">
                <img className="duration-700 w-56 hover:overflow-hidden" src="/img_ex_2.png" alt="" />
              </div>
          </div>
          {/* Card ends */}
        {/* card */}
          <div data-aos="zoom-in" data-aos-duration="800"  className="w-[270px] md:mb-0 mb-10 hover:-translate-y-1 duration-700 relative h-[426px]">
            <div className=" absolute bottom-14 left-0 right-0 duration-1000 hover:-translate-y-9">
              {/* header  */}
                <div className="flex justify-center items-center text-red-500 bg-white">
                   <FaEllipsisH></FaEllipsisH>
                </div>
                <div className="flex ">

                <div data-tip="Buy Now" className="w-1/2 py-3 tooltip tooltip-top flex justify-center bg-blue-300">
                  <FaShoppingCart></FaShoppingCart>
                </div>
                <div data-tip="View" className="w-1/2 py-3 tooltip tooltip-top flex justify-center bg-green-300">
                  <FaRegEye></FaRegEye>
                </div>
                </div>
            </div>
            {/* footer */}
              <div className="h-1/4 p-3 absolute bottom-0 left-0 right-0 rounded-b-lg bg-yellow-200">
                <h1 className="fontNunito">Darth Varder FunkoPop</h1>
                <div className="flex gap-2">

                <h4 className="fontNunito font-bold line-through text-red-500">$99</h4>
                <h4 className="fontNunito font-bold text-slate-700">$49</h4>
                </div>
              </div>
              {/* img */}
              <div className="h-3/4 rounded-t-lg bg-slate-100">
              <div className="badge absolute top-2 right-2 badge-secondary">On Sale !!!</div>
                <img className="duration-700 hover:overflow-hidden" src="/img_ex_3.png" alt="" />
              </div>
          </div>
          {/* Card ends */}
      </div>
        
    </div>
  );
};

export default Extraone;
