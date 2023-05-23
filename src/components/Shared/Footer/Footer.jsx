import { FaRegNewspaper, FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom,rgba(0, 0, 0, 0.863), rgba(0, 0, 0, 0.863)),url('https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/v1571421297/www.travelportland.com/74A1450/74A1450.jpg')",
        backgroundRepeat: "repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
      }}
      className=""
    >
      <div className="w-full md:w-[1280px] py-16 mx-auto flex md:flex-row flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          {/* logo */}
          <div
            className="flex items-center"
          >
            <img
              className="w-14 bg-yellow-400 order-2 md:order-1 rounded-full md:block hidden"
              src="/src/assets/logo_cropped.png"
              alt=""
            />
            <div className="md:text-3xl website-name text-white md:order-2 order-1 ml-3 text-xl flex ">
             
              Toy <span className="text-red-500 website-name ml-1">Smash</span>
            </div>
          </div>
          {/* logo ends here */}
          {/* social */}
          <div className="flex gap-2 mt-3">
            <FaFacebookSquare className="text-blue-500 bg-white duration-300 hover:text-white hover:bg-blue-600 cursor-pointer h-6 w-6 rounded-sm"></FaFacebookSquare>
            <FaInstagramSquare className="text-pink-500 bg-white duration-300 hover:text-white hover:bg-pink-500 cursor-pointer h-6 w-6 rounded-sm"></FaInstagramSquare>
            <FaTwitterSquare className="text-blue-500 bg-white duration-300 hover:text-white hover:bg-blue-400 cursor-pointer h-6 w-6 rounded-sm"></FaTwitterSquare>
          </div>
          {/* input */}
          <div className="flex items-center mt-3">
            <div className="border-2 rounded-s-full pl-3 py-1 ">
              <input
                className="text-sm bg-transparent"
                type="text"
                placeholder="Type your email here"
                name=""
                id=""
              />
            </div>
            <div className="px-2 bg-yellow-400 py-[9px] cursor-pointer  hover:bg-yellow-300 hover:text-red-600 duration-300  rounded-e-full text-red-500 border-2 border-white">
              <FaRegNewspaper></FaRegNewspaper>
            </div>
          </div>
          {/* etc */}
          <h2 className="text-sm font-semibold text-slate-300 mt-2">
            write your email to get newsletter
          </h2>
        </div>
        <div className="mt-3 md:0">
          {/* contact info */}
          <div className="mt-3 text-sm text-white font-semibold">
            <h1 className="font-bold text-xl text-slate-400 mb-3">
              Contact info:
            </h1>
            <h4 className="mb-2">Address : 19/B,Road 3,Dhanmondi,Dhaka-1205.</h4>
            <h4 className="mb-2">Phone : +8801020304050</h4>
            <h4 className="mb-2">Email : toysmash@gmail.com</h4>
            <h4 className="mb-2">Yahoo : toysmash@yahoo.com</h4>
            <h4 className="mb-2">hotmail : toysmash@hotmail.com</h4>
          </div>
        </div>
        <div>
          <div className="mt-3 text-sm text-white font-semibold">
            <h1 className="font-bold text-lg text-slate-400 mb-3">Services:</h1>
            <h4 className="mb-2">Fast Buy</h4>
            <h4 className="mb-2">Featured toys</h4>
            <h4 className="mb-2">Seller Options</h4>
            <h4 className="mb-2">Protection from Hackers</h4>
            <h4 className="mb-2">News letter</h4>
          </div>
        </div>
      </div>
      <h1 className="text-center text-sm text-slate-300 py-6 ">Copyright © 2023 - All right reserved by ToySmash Industries Ltd</h1>
    </div>
  );
};

export default Footer;
