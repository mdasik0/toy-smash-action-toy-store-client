import img_1 from "../../../../assets/assets/img_1.png"
import img_2 from "../../../../assets/assets/img_2.png"
import img_3 from "../../../../assets/assets/img_3.jpg"
import img_4 from "../../../../assets/assets/img_4.jpg"
import img_5 from "../../../../assets/assets/img_5.jpg"
import img_6 from "../../../../assets/assets/img_6.jpg"
import img_7 from "../../../../assets/assets/img_7.jpg"
import img_8 from "../../../../assets/assets/img_8.jpg"
import img_9 from "../../../../assets/assets/img_9.jpg"
import img_10 from "../../../../assets/assets/img_10.jpg"
import img_11 from "../../../../assets/assets/img_11.jpg"
import img_12 from "../../../../assets/assets/img_12.jpg"

const Gallery = () => {

      
      return (
          <div>
            <div className="md:w-[1000px] md:mx-auto w-full mx-3">
                <div className="grid gap-3 mb-6 grid-cols-3">
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_1} alt="" />
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_2} alt="" />
                <img className="w-[300px] h-[300px] object-cover object-top " src={img_6} alt="" />
                </div>
                <div className="grid gap-3 mb-6 grid-cols-3">
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_3} alt="" />
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_4} alt="" />
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_5} alt="" />
                </div>
                <div className="grid gap-3 mb-6 grid-cols-3">
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_7} alt="" />
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_8} alt="" />
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_9} alt="" />
                </div>
                
                <div className="grid gap-3 mb-6 grid-cols-3">
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_10} alt="" />
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_11} alt="" />
                <img className="w-[300px] h-[300px] object-cover object-top" src={img_12} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Gallery;