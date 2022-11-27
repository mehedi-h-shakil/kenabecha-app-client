import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const date = new Date();

  const onSubmit = (data) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);

    const url = process.env.REACT_APP_IMGBB_KEY;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const product = {
          productName: data.name,
          image: imageData.data.display_url,
          company: data.company,
          resalePrice: data.resalePrice,
          condition: data.condition,
          mobile: data.number,
          location: data.location,
          description: data.description,
          originalPrice: data.broughtPrice,
          purchaseYear: data.purchaseYear,
          used: data.used,
          date: date,
          sellerEmail: user?.email,
          sellerName: user?.displayName,
        };
        // console.log(product);
        saveProduct(product);
      });
  };

  const saveProduct = (product) => {
    // console.log(product);
    fetch("http://localhost:5000/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Product added successfully.");
        navigate("/dashboard/myProducts");
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body w-96 lg:w-[800px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            <span className="label-text">Mobile Photo</span>
          </label>
          <input
            {...register("image")}
            type="file"
            name="image"
            accept="image/*"
            placeholder="Mobile Photo"
            className="file-input file-input-bordered file-input-success w-full "
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
            className="select select-success w-full "
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brought Price</span>
            </label>
            <input
              {...register("broughtPrice")}
              type="text"
              name="broughtPrice"
              placeholder="Brought Price"
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <button className="btn btn-success w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddAProduct;
