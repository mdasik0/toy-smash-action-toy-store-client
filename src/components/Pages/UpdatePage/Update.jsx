import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const Update = () => {
  useTitle('Update Toys')
  const data = useLoaderData();
  const navigate = useNavigate();

  console.log(data);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const description = form.description.value;

    const updateToy = {
      price: parseInt(price),
      quantity,
      description,
    };
    console.log(updateToy);
    fetch(
      `https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/singleData/${data._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire("Good job!", "Toy Has been Added", "success");
          navigate("/myToys");
        }
      });
  };
  return (
    <div className="md:w-[1280px] w-full md:mx-auto  mx-3">
      <form className="my-10 w-2/3 mx-auto" onSubmit={handleUpdate}>
        {/* price */}
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span className="font-semibold text-sm py-2">Price</span>
            <input
              type="text"
              name="price"
              defaultValue={data.price}
              placeholder="Toy Price here"
              className="input input-bordered"
            />
          </label>
        </div>
        {/* description */}
        <div className="form-control w-full my-6">
          <label className="input-group input-group-vertical">
            <span className="font-semibold text-sm py-2"> Description</span>
            <input
              type="text"
              defaultValue={data.description}
              name="description"
              placeholder="description here"
              className="input input-bordered"
            />
          </label>
        </div>
        {/* quantity */}
        <div className="form-control">
          <label className="input-group input-group-vertical">
            <span className="font-semibold text-sm py-2"> Quantity</span>
            <input
              type="number"
              defaultValue={data.quantity}
              name="quantity"
              placeholder="Quantity here"
              className="input input-bordered"
            />
          </label>
        </div>
        <input
          className="btn bg-red-500 my-auto border-none btn-sm mt-6 "
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
