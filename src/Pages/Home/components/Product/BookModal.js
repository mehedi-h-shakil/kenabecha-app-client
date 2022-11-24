import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookModal = ({ data }) => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const {
    productName,
    resalePrice,
    originalPrice,
    used,
    image,
    location,
    sellerName,
  } = data;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <div className="py-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-96 lg:w-[450px]"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  disabled
                  value={user?.displayName}
                  placeholder={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  disabled
                  value={user?.email}
                  placeholder={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  {...register("itemName")}
                  type="text"
                  name="itemName"
                  disabled
                  defaultValue={productName}
                  placeholder={productName}
                  className="input input-bordered input-success"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  {...register("price")}
                  type="text"
                  name="price"
                  disabled
                  value={resalePrice}
                  placeholder={resalePrice}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact</span>
                </label>
                <input
                  {...register("contact")}
                  type="text"
                  name="contact"
                  placeholder="Your Contact Number"
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
                  placeholder="Meeting Location"
                  className="input input-bordered"
                />
              </div>
            </form>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
