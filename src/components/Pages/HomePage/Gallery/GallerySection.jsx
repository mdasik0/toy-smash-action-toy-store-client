import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./GallerySection.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const GallerySection = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:w-[1280px] md:mx-auto w-full ">
      <div id="setBgImg" className="rounded-xl">
        <h2 data-aos="fade-up" data-aos-duration="800" className="text-white text-5xl fontNunito text-center pt-6">
          Toy Gallery Section
        </h2>
        <p data-aos="fade-up" data-aos-duration="800" className="text-white font-light fontNunito text-center p-2 mt-2 text-sm">
          Welcome to our delightful Toy Gallery! Step into a whimsical world
          filled with enchanting toys that will ignite the imagination of
          children and adults alike.{" "}
        </p>
        <p data-aos="fade-up" data-aos-duration="800" className="text-white font-light fontNunito text-center p-2 mt-2 text-sm">
          Please Hover Over the image and click Open the Gallery.
        </p>
        <div data-aos="flip-left" data-aos-duration="1000" className="flex md:flex-row flex-col justify-center">
          <div className="relative my-6 mx-6 rounded-xl border-4 border-white pb-3">
            <div className=" hover:bg-[#0000009a] bg-transparent duration-500 text-transparent hover:text-white inset-0 absolute">
              <button
                className="rounded inset-0 gap-2 absolute "
                type="button"
                onClick={() => setOpen(true)}
              >
                Gallery
                
                <div className="badge h-8 hover:badge-secondary"><FaArrowAltCircleRight></FaArrowAltCircleRight></div>
              </button>
            </div>
            <img
              className="w-[300px] object-cover object-top rounded-lg  h-[300px]"
              src="https://media.istockphoto.com/id/471592903/photo/superman-and-bent-metal.jpg?s=612x612&w=0&k=20&c=_wnlZ9iRug_2nTkNlicgiBOqCNr3ooDKNUeB3vBCASU="
              alt=""
            />
          </div>
        </div>
      </div>

      {/* */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "https://i.pinimg.com/736x/ba/b6/8f/bab68fe8bf6a37e421174068eb87269a.jpg" },
          { src: "https://i.pinimg.com/564x/45/45/b4/4545b4c2908733ed63566f5cb5ff83bf.jpg" },
          { src: "https://i.pinimg.com/736x/51/dc/d0/51dcd058a12cccc248fed2eb7aeb7f8d.jpg" },
          { src: "https://i.pinimg.com/564x/6f/2d/25/6f2d2597bdf1a8ddd6097a7e2dbc4512.jpg" },
          { src: "https://i.pinimg.com/564x/bf/1f/9a/bf1f9a1524631e20ce27ce3af50d1374.jpg" },
          { src: "https://i.pinimg.com/564x/01/9c/d7/019cd7a6af55965a3b04dbfc6ebdb266.jpg" },
          { src: "https://i.pinimg.com/736x/d7/45/d6/d745d6e4e7a95d0a1f0204c0902d1fb2.jpg" },
          { src: "https://i.pinimg.com/564x/11/61/2d/11612d7ff8ee4528c016d80ce708bddd.jpg" },
          { src: "https://i.pinimg.com/564x/94/e5/6a/94e56aca93b80958fe3e47c0a9b944ed.jpg" },
          { src: "https://i.pinimg.com/564x/ae/12/d6/ae12d6847a68db608b892cf081526c4e.jpg" },
        ]}
      />
    </div>
  );
};

export default GallerySection;
