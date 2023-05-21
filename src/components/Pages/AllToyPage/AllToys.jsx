import { useEffect, useState } from "react";

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
          return alert("please give something as a input");
        }
        if (data.length === 0) {
          return alert("can't find the item");
        }
        setData(data)
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
                <button className="btn bg-red-500 my-auto border-none btn-sm">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
