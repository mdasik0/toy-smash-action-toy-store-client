const Extratwo = () => {
  return (
    <div className="md:w-[1280px] md:my-10 my-3 md:mx-auto mx-3 w-full grid gap-10 md:grid-cols-3 grid-cols-1  ">
      <div className="card rounded-lg w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="/src/assets/assets/img_14.jpg"
            alt="Key Chain"
          />
        </figure>
        <div className="card-body p-16">
          <h2 className="card-title">Key Chain!</h2>
          <p>DeadPool key chains </p>
          <div className="badge badge-accent">30% off</div>
          <div className=""><span className="line-through">$45</span> now at <span className="text-3xl font-bold">$30 !!!</span></div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card rounded-lg w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
          className=""
            src="/src/assets/assets/img_12.jpg"
            alt="Key Chain"
          />
        </figure>
        <div className="card-body p-16">
          <h2 className="card-title">Iron man doll!</h2>
          <p>Iron Man Golden doll</p>
          <div className="badge badge-accent">45% off</div>
          <div className=""><span className="line-through">$99</span> now at <span className="text-3xl font-bold">$53 !!!</span></div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card rounded-lg w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
          className=""
            src="/src/assets/assets/img_24.jpg"
            alt="Key Chain"
          />
        </figure>
        <div className="card-body p-16">
          <h2 className="card-title">Yoda plusshi!</h2>
          <p>Yoda Plussi made with 100% Cotton</p>
          <div className="badge text-xl badge-accent">50% off</div>
          <div className=""><span className="line-through">$199</span> now at <span className="text-3xl font-bold">$99 !!!</span></div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extratwo;
