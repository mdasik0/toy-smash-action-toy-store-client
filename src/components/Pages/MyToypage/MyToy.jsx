import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const MyToy = () => {
  useTitle('My Toys')
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/myToys/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/myToys/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        const remaining = data.filter((item) => item._id !== id);
        setData(remaining);
      }
    });
  };

  const handleSortone = () => {
    
    fetch(`https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/sortOne/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  const handleSorttwo = () => {
    
    fetch(`https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/sortTwo/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="md:w-[1280px] md:mx-auto w-full mx-3">
      <button
        onClick={handleSorttwo}
        className="border-2 border-black rounded-full active:bg-red-500 px-3 bg-slate-200"
      >
        Sort by ascending
      </button>
      <button
        onClick={handleSortone}
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
            <th>Update</th>
            <th>Delete</th>
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
                <Link to={`/update/${singleData._id}`}>
                  <label className="btn bg-red-500 my-auto border-none btn-sm">
                    Update
                  </label>
                </Link>
              </td>
              {/* delete data */}
              <td>
                <button
                  onClick={() => {
                    handleDelete(singleData._id);
                  }}
                  className="btn btn-circle bg-red-500 my-auto border-none btn-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
