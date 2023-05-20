const AddToy = () => {
  return (
    <div className="mx-8 gap-5 md:mx-auto my-3 w-full md:my-10 md:w-[1280px] grid md:grid-cols-3 grid-cols-1">
      {/* input boxes here */}
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
          <select className="select select-bordered select-sm input-lg max-w-xs">
            <option disabled selected>
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
  );
};

export default AddToy;
