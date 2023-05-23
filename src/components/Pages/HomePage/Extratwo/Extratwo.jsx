const Extratwo = () => (
  <div className="md:w-[1280px] md:my-10 my-3 md:mx-auto w-full grid gap-10 md:grid-cols-2 grid-cols-1  ">
    {/* card here */}
      {/* image */}
      <div data-aos="zoom-in" data-aos-duration="1400" className="w-[350px] my-6 relative mx-auto bg-slate-100 rounded-xl h-[490px]">
        <div className="h-[250px] rounded-xl bg-green-300">
          <img className="h-full w-full object-cover rounded-xl" src="https://i.pinimg.com/564x/0a/78/73/0a7873423321e4cfeefe8d143d35c7d7.jpg" alt="" />
          </div>
        {/* body */}
        <div className="h-[236px] rounded-b-xl bg-slate-100">
          {/* tagbox */}
          <div className="p-6 flex items-start flex-col gap-2">
            <div className="flex gap-3">
              <div className="text-xs rounded-full font-extrabold bg-[#ffc80080] px-2 py-[2px]">
                Dc Universe
              </div>
              <div className="text-xs rounded-full font-extrabold px-2 py-[2px]  border">
                BatMan
              </div>
            </div>
            <div className="text-xs rounded-full font-extrabold px-2 py-[2px] border">
              Tuesday, May 4th,2023
            </div>
          </div>
          <div className="text-xl p-6 font-bold">
            After  a while i finally found the toy i wanted in here. I ...
          </div>
        </div>
        <button className="absolute left-6 bg-[#FFC600] font-bold px-3 py-[7px] text-sm rounded-full text-black  -bottom-3">
          Read more &gt;{" "}
        </button>
      </div>
      {/* card ends */}
    {/* card here */}
      {/* image */}
      <div data-aos="zoom-in" data-aos-duration="1400" className="w-[350px] my-6 relative mx-auto bg-slate-100 rounded-xl h-[490px]">
        <div className="h-[250px] rounded-xl bg-green-300">
            <img className="object-cover w-full h-full object-to rounded-xl" src="https://i.pinimg.com/564x/83/15/af/8315af5fc9e83aef6419aa8134a763f4.jpg" alt="" />
          </div>
        {/* body */}
        <div className="h-[236px] rounded-b-xl bg-slate-100">
          {/* tagbox */}
          <div className="p-6 flex items-start flex-col gap-2">
            <div className="flex gap-3">
              <div className="text-xs rounded-full font-extrabold bg-[#ffc80080] px-2 py-[2px]">
                Marvel Universe
              </div>
              <div className="text-xs rounded-full font-extrabold px-2 py-[2px]  border">
                Deadpool
              </div>
            </div>
            <div className="text-xs rounded-full font-extrabold px-2 py-[2px] border">
              Tuesday, May 9th,2023
            </div>
          </div>
          <div className="text-xl p-6 font-bold">
            I am very happy with my purchase here. I suggest ...
          </div>
        </div>
        <button className="absolute left-6 bg-[#FFC600] font-bold px-3 py-[7px] text-sm rounded-full text-black  -bottom-3">
          Read more &gt;{" "}
        </button>
      </div>
      {/* card ends */}

  </div>
);

export default Extratwo;
