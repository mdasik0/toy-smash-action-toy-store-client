import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const data = useLoaderData();
  
  const {img,subCategory,name,price,quantity,rating,sellerEmail,sellerName,description} = data;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="ml-10 border-2 border-black rounded-lg p-4">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-2 font-semibold">
            Price: ${price}
          </p>
          <p className="py-2 font-semibold">
            Category: {subCategory}
          </p>
          <p className="py-2 font-semibold">
            Quantity: {quantity}
          </p>
          <p className="py-2 font-semibold">
            seller Name: {sellerName}
          </p>
          <p className="py-2 font-semibold">
            Seller Email: {sellerEmail}
          </p>
          <p className="py-2 font-semibold">
            rating: {rating}
          </p>
          <p className="py-2 font-semibold">
            Description: {description}
          </p>
          <button className="text-white bg-red-500 font-semibold hover:text-red-500 hover:bg-slate-200 px-3 py-1 rounded-sm  shadow-xl hover:shadow-inner hover:shadow-xl">buy now</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
