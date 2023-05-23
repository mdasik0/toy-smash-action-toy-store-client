import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const SinglePage = () => {
  useTitle('Toy Details')
  const data = useLoaderData();


  

  const {
    img,
    subCategory,
    name,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    description,
  } = data;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="ml-10 rounded-lg p-4">
          <h1 className="text-5xl my-6 font-bold">{name}</h1>

          <div className="border-4 p-4 border-black relative">
            <h1 className="font-bold bg-white border-4 border-black px-3  absolute -top-3">
              Details
            </h1>
            <div className="py-2 font-semibold">Price: ${price}</div>
            <div className="py-2 font-semibold">Category: {subCategory}</div>
            <div className="py-2 font-semibold">Quantity: {quantity}</div>
            <div className="py-2 font-semibold">seller Name: {sellerName}</div>
            <div className="py-2 font-semibold">Seller Email: {sellerEmail}</div>
            <div className="py-2 flex font-semibold">rating: <Rating
                    style={{ maxWidth: 100 }}
                    value={(rating)}
                    readOnly
                  /> </div>
            <div className="py-2 font-semibold">Description: {description}</div>
            <Link to="/">
              <button className="text-black border-black border-4  bg-red-500 font-semibold hover:text-red-500 hover:bg-slate-200 px-3 py-1 rounded-sm  shadow-xl">
                buy now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
