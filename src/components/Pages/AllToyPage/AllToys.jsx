import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllToys = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (data.length > 20) {
    setData(data.slice(0, 20));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;

    fetch(`http://localhost:5000/allToys/${search}`)
      .then((res) => res.json())
      .then((data) => {
        if (!search) {
          return Swal.fire(
            '?!',
            "Please Write something!",
            'info'
          );
        }
        if (data.length === 0) {
          return Swal.fire(
            'Do not Exist',
            "Can't find the data!",
            'error'
          );
        }
        setData(data);
      });
  };
  return (
    <div className="md:w-[1280px] md:mx-auto w-full mx-3">
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
                <label
                  htmlFor={singleData.name}
                  className="btn bg-red-500 my-auto border-none btn-sm"
                >
                  View Details
                </label>
                <input
                  type="checkbox"
                  id={singleData.name}
                  className="modal-toggle "
                />
                <div className="modal ">
                  <div className="modal-box h-[600px] rounded-lg">
                    <div>
                      <img className="rounded object-cover object-top w-full  h-[300px]" src={singleData.img} alt="" />
                    </div>
                    <div className="w-56">

                    <h3 className="font-bold">Toy name : {singleData.name}</h3>
                    <h4 className="font-semibold mt-3 text-sm">Seller Name : {singleData.sellerName}</h4>
                    <h4 className="font-semibold text-sm">Seller Email : {singleData.email}</h4>
                    <h4 className="font-semibold text-sm">Price : {singleData.price}</h4>
                    <h4 className="font-semibold text-sm">Rating : {singleData.rating}</h4>
                    <h4 className="font-semibold text-sm">Quantity : {singleData.quantity}</h4>
                    <h4 className="font-semibold w-1/2 text-sm">Description : {singleData.description}</h4>
                    <div className="mt-3">

                    <label htmlFor={singleData.name} className="px-4 bg-red-500 text-white hover:bg-slate-800 hover:text-white duration-500 font-semibold text-sm py-2 rounded shadow-xl hover:shadow-inner hover:shadow-slate-500  my-3">
                        Buy now!
                    </label>
                    </div>
                    </div>
                  </div>
                </div>
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
