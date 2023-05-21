import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  // displayName
  // email
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectElement = document.getElementById("mySelect");
    const subCategory = selectElement.value;
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const data = {
      name,
      sellerName,
      email: sellerEmail,
      img,
      subCategory,
      price: parseInt(price),
      quantity,
      rating,
      description,
    };
    console.log(data);
    fetch(
      "https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/allToys",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "Toy Has been Added", "success");
        }
      });
  };

  return (
    <div className="mx-8 md:mx-auto my-3 w-full md:my-10 md:w-[1280px]">
      <form
        onSubmit={handleSubmit}
        className="flex border-2 p-6 rounded-xl flex-col items-center"
      >
        {/* input boxes here */}
        <h1 className="text-5xl text-slate-800 font-bold md:my-10">
          Add a Toy
        </h1>
        <div className="grid gap-6 w-full md:grid-cols-2 grid-cols-1">
          {/* <div className="form-control w-1/3">
            <label className="input-group input-group-sm">
              <span>Toy PhotoURL</span>
              <input
                type="text"
                name="img"
                placeholder="Toy photoURL here"
                className="input input-bordered input-sm"
              />
            </label>
          </div> */}
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-sm py-2">Toy PhotoURL</span>
              <input
                type="text"
                name="img"
                placeholder="Toy photoURL here"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-sm py-2">Toy Name</span>
              <input
                type="text"
                name="name"
                placeholder="Toy name here"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-sm py-2">Price</span>
              <input
                type="text"
                name="price"
                placeholder="Toy Price here"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-sm py-2">Rating</span>
              <input
                type="text"
                name="rating"
                placeholder="Toy Rating here"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-sm py-2">Seller Name</span>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="sellerName"
                placeholder="seller Name here"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-sm py-2">Seller Email</span>
              <input
                type="email"
                defaultValue={user?.email}
                name="sellerEmail"
                placeholder="seller Email here"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-sm py-2"> Quantity</span>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity here"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical">
              <span className="font-semibold text-sm py-2">SubCategory</span>
              <select
                id="mySelect"
                className="select select-bordered select-sm input-lg"
              >
                <option disabled>Sub Category</option>
                <option value="Marvel">Marvel</option>
                <option value="Dc">Dc Universe</option>
                <option value="Transformers">Transformers</option>
                <option value="Star Wars">Star Wars</option>
              </select>
            </label>
          </div>
        </div>
        <div className="form-control w-full mt-6">
          <label className="input-group input-group-vertical">
            <span className="font-semibold text-sm py-2"> Description</span>
            <input
              type="text"
              name="description"
              placeholder="Description here"
              className="input input-bordered"
            />
          </label>
        </div>
        <input
          className="px-4 bg-red-500 text-white hover:bg-slate-800 hover:text-white duration-500 font-semibold text-sm py-2 rounded shadow-xl hover:shadow-inner hover:shadow-slate-500  my-3"
          type="submit"
          value="Add a Toy"
        />
      </form>
    </div>
  );
};

export default AddToy;
