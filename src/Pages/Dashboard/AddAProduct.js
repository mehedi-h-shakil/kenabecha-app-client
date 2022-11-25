import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body w-96 lg:w-[450px]"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Company</span>
          </label>
          <select
            {...register("company")}
            name="company"
            placeholder="Phone Company"
            className="select select-success w-full max-w-xs"
          >
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Xioami">Xioami</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            placeholder="Product Name"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            {...register("resalePrice")}
            type="text"
            name="resalePrice"
            placeholder="Resale Price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>
          <select
            {...register("condition")}
            name="conditon"
            placeholder="Conditon"
            className="select select-success w-full max-w-xs"
          >
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            {...register("number")}
            type="text"
            name="number"
            placeholder="Mobile Number"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            {...register("location")}
            type="text"
            name="location"
            placeholder="Your Location"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description")}
            type="text"
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered"
          />
        </div>
        <div lassName="form-control">
          <label className="label">
            <span className="label-text">Brought Price</span>
          </label>
          <input
            {...register("broughtPrice")}
            type="text"
            name="broughtPrice"
            placeholder="Brought Price"
            className="input input-bordered"
          />
        </div>
        <div lassName="form-control">
          <label className="label">
            <span className="label-text">Year of Purchase</span>
          </label>
          <input
            {...register("purchaseYear")}
            type="text"
            name="purchaseYear"
            placeholder="Brought Price"
            className="input input-bordered"
          />
        </div>
        <div lassName="form-control">
          <label className="label">
            <span className="label-text">Used</span>
          </label>
          <input
            {...register("used")}
            type="text"
            name="used"
            placeholder="Used Time"
            className="input input-bordered"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAProduct;
