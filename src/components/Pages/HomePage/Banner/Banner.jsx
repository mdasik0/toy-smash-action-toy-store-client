const Banner = () => {
  return (
    <div className="carousel w-[400px] md:w-[1280px] md:my-10 my-3 mx-auto h-[550px]">
  <div id="slide1" className="carousel-item h-[550px] relative w-full">
    <img src="https://cdnb.artstation.com/p/assets/images/images/027/624/827/large/phase-runner-obivsvader-x.jpg?1592071285" className="rounded-lg w-full object-cover object-left md:object-top" />
    <div className="absolute flex flex-col rounded-lg h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-16 space-y-8 justify-center left-0 right-5">
          <h1 className="text-5xl font-bold w-1/4 text-white"></h1>
          <p className="text-white font-thin w-1/3"></p>
          <div>
            <button className="btn bg-[#FF3811] rounded-sm border-none mr-3">Discover More</button>
            <button className="btn btn-outline  border-white rounded-sm border-2 text-white hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white">Discover More</button>
          </div>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="text-white ml-3">❮</a> 
      <a href="#slide2" className="text-white mr-3">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item h-[550px] relative w-full">
    <img src="https://i.pinimg.com/originals/d1/38/59/d138596835d8759f190e9fc51cd10ddc.jpg" className="rounded-lg w-full object-cover md:object-top object-right" />
    <div className="absolute flex flex-col rounded-lg h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-16 space-y-8 justify-center left-0 right-5">
          <h1 className="text-5xl font-bold w-1/4 text-white"></h1>
          <p className="text-white font-thin w-1/3"></p>
          <div>
            <button className="btn bg-[#FF3811] rounded-sm border-none mr-3">Discover More</button>
            <button className="btn btn-outline  border-white rounded-sm border-2 text-white hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white">Discover More</button>
          </div>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="text-white ml-3">❮</a> 
      <a href="#slide3" className="text-white mr-3">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item h-[550px] relative w-full">
    <img src="https://i.pinimg.com/originals/7d/bf/a1/7dbfa1778efbc1fb0f660778a7115a27.jpg" className="rounded-lg w-full object-cover object-top" />
    <div className="absolute flex flex-col rounded-lg h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-16 space-y-8 justify-center left-0 right-5">
          <h1 className="text-5xl font-bold w-1/4 text-white"></h1>
          <p className="text-white font-thin w-1/3"></p>
          <div>
            <button className="btn bg-[#FF3811] rounded-sm border-none mr-3">Discover More</button>
            <button className="btn btn-outline  border-white rounded-sm border-2 text-white hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white">Discover More</button>
          </div>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="text-white ml-3">❮</a> 
      <a href="#slide4" className="text-white mr-3">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item h-[550px] relative w-full">
    <img src="https://pbs.twimg.com/media/EFiEukCU0AABZWP?format=jpg&name=large" className="rounded-lg w-full object-cover object-top" />
    <div className="absolute flex flex-col rounded-lg h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] pl-16 space-y-8 justify-center left-0 right-5">
          <h1 className="text-5xl font-bold w-1/4 text-white"></h1>
          <p className="text-white font-thin w-1/3"></p>
          <div>
            <button className="btn bg-[#FF3811] rounded-sm border-none mr-3">Discover More</button>
            <button className="btn btn-outline  border-white rounded-sm border-2 text-white hover:border-[#FF3811] hover:bg-[#FF3811] hover:text-white">Discover More</button>
          </div>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="text-white ml-3">❮</a> 
      <a href="#slide1" className="text-white mr-3">❯</a>
    </div>
  </div>
</div>
  );
};

export default Banner;
