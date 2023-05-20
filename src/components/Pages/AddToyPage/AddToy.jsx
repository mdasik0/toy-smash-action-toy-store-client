import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const AddToy = () => {
  const {user} = useContext(AuthContext)
  console.log(user) 
  // displayName
  // email
  const handleSubmit = e => {
    e.preventDefault()
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
    const data = {name,img,rating,description,sellerName,sellerEmail,quantity,price,subCategory}
    console.log(data)
    fetch('')
    .then(res => res.json())
    .then(data => console.log(data))
  }



  return (
    <div className="mx-8 md:mx-auto my-3 w-full md:my-10 md:w-[1280px]">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {/* input boxes here */}
        <div className="grid gap-5 md:grid-cols-3 grid-cols-1">
          <div className="form-control">
            <label className="input-group input-group-sm">
              <span>Toy PhotoURL</span>
              <input
                type="text"
                name="img"
                placeholder="Toy photoURL here"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-sm">
              <span>Toy Name</span>
              <input
                type="text"
                name="name"
                placeholder="Toy name here"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-sm">
              <span>Price</span>
              <input
                type="text"
                name="price"
                placeholder="Toy Price here"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-sm">
              <span>Rating</span>
              <input
                type="text"
                name="rating"
                placeholder="Toy Rating here"
                className="input input-bordered input-sm"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="input-group input-group-sm">
              <span>seller Name</span>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="sellerName"
                placeholder="seller Name here"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-sm">
              <span>seller Email</span>
              <input
                type="email"
                defaultValue={user?.email}
                name="sellerEmail"
                placeholder="seller Email here"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-sm">
              <span>Quantity</span>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity here"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-sm">
              <span>SubCategory</span>
              <select id="mySelect" className="select select-bordered select-sm input-lg max-w-xs">
                <option disabled >
                  Sub Category
                </option>
                <option value="Marvel">Marvel</option>
                <option value="Dc">Dc Universe</option>
                <option value="Transformers">Transformers</option>
                <option value="Star Wars">Star Wars</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-sm">
              <span>Description</span>
              <input
                type="text"
                name="description"
                placeholder="Description here"
                className="input input-bordered input-sm"
              />
            </label>
          </div>
        </div>
        <input className="btn mt-3" type="submit" value="Add a Toy" />
      </form>
    </div>
  );
};

export default AddToy;
