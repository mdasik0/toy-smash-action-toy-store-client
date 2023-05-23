import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {
  useTitle('All Toys')
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/singleData")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (data.length > 20) {
    setData(data.slice(0, 20));
  }
  // sort by ascending order
  const handleSort = (sortBy) => {
    
    fetch(`https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/allToys?sortBy=${sortBy}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    if (!search) {
      return Swal.fire("?!", "Please Write something!", "info");
    }

    fetch(`https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/allToys/${search}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          return Swal.fire("Do not Exist", "Can't find the data!", "error");
        }
        setData(data);
      });
  };
  return (
    <div className="md:w-[1280px] md:mx-auto w-full mx-3">
      <h1 className="text-3xl font-bold text-slate-700 mt-6">
        All Users Toy is Here
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex my-10 text-sm font-semibold"
      >
        <div className="border-2 border-black rounded-s-full px-3">
          <input type="text" name="search" placeholder="Search by name" />
        </div>
        <input
          type="submit"
          value="search"
          className="border-2 border-black rounded-e-full active:bg-red-500 px-3 bg-slate-200"
        />
      </form>
      <button
        onClick={() => handleSort("asc")}
        className="border-2 border-black rounded-full active:bg-red-500 px-3 bg-slate-200"
      >
        Sort by ascending
      </button>
      <button
        onClick={() => handleSort("dsc")}
        className="border-2 border-black rounded-full active:bg-red-500 px-3 bg-slate-200"
      >
        Sort by descending
      </button>
      <table className="table table-zebra my-6 w-full">
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Toy name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((singleData) => (
            <tr className="py-6" key={singleData._id}>
              <td>{singleData.sellerName}</td>
              <td>{singleData.name}</td>
              <td>{singleData.subCategory}</td>
              <td>{singleData.price}</td>
              <td>{singleData.quantity}</td>
              <td>
                <label className="btn bg-red-500 my-auto border-none btn-sm">
                  <Link to={`/toy/${singleData._id}`}>View Details</Link>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
    </div>
  );
};

export default AllToys;
