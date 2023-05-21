const Extraone = () => {
  return (
    <div>
      <div className="bg-slate-400 md:w-[1100px] h-[500px] mb-[12rem] w-full md:mx-auto mx-3 relative">
        <h1 className="text-center hover:-translate-y-2 hover:translate-x-3 duration-500 text-5xl font-bold pt-10">Today&apos;s letest <span className="text-yellow-500">Sale</span></h1>
        <p className="text-center w-1/2 mx-auto md:mt-6 mt-3" >every day we realease a one item.with half of it&apos;s price.Grab your chance and Get it !!!</p>
        <div className="absolute md:flex-row flex-col left-20 -bottom-36 md:left-64 flex bg-slate-200">
            <div className="md:w-[400px] md:hover:w-[420px] duration-700 hover:h-[420px] h-[400px]">

            <img src="/src/assets/assets/img_13.png" className="w-full h-full object-cover object-top" alt="" />
            </div>
            <div style={{fontFamily:'Arial'}} className="absolute p-4">
            <div className="badge badge-primary mb-3">50 % off</div>
                <h1 className="text-white text-3xl font-bold">

                Today&apos;s FeaTured
                </h1>
                <button className="btn mt-3 btn-sm">Go To Campaine</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Extraone;
