const Extraone = () => {
  return (
    <div>
      <div className="bg-slate-400 md:w-[1100px] h-[500px] mb-[30rem] w-full md:mx-auto mx-3 relative">
        <h1 className="text-center text-5xl font-bold pt-10">Today&apos;s letest Sale</h1>
        <p className="text-center w-1/2 mx-auto md:mt-6 mt-3" >every day we realease a one item.with half of it&apos;s price.Grab your chance and Get it !!!</p>
        <div className="absolute md:flex-row flex-col left-20 -bottom-36 md:left-64 flex bg-slate-200">
            <div className="md:w-[400px] object-cover object-top h-[400px]">

            <img src="/src/assets/assets/img_13.png" className="w-full h-full object-cover object-top" alt="" />
            </div>
            <div>
                <h1 className="text-slate-600 text-xl font-bold">

                Today&apos;s FeaTured
                </h1>
                <p className="mt-10 ml-10 font-bold">
                    Only At- <span className="text-2xl line-through">$999</span>
                </p>
                <h2 className="font-bold text-5xl mt-10">
                    $ 499 ! ! !
                </h2>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Extraone;
