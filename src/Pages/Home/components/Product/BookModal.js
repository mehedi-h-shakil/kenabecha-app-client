import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import toast from "react-hot-toast";

// const axios = require("axios");

const BookModal = ({ data }) => {
  const { user } = useContext(AuthContext);
  const { productName, resalePrice, image } = data;
  // console.log(data);

  const navigate = useNavigate();

  const handleBook = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const email = user?.email;
    const product = productName;
    const price = resalePrice;
    const meetLocation = form.location.value;
    const contact = form.contact.value;

    const bookedData = {
      buyerName: name,
      buyerEmail: email,
      bookedProduct: product,
      price: price,
      location: meetLocation,
      contact: contact,
      image,
      mobileId: data?._id,
    };
    // console.log(name, email, product, price, meetLocation, contact, data?._id);

    // axios
    //   .post(`http://localhost:5000/bookings/${data?._id}`, bookedData)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    fetch(`http://localhost:5000/bookings/${data?._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.matchedCount === 1) {
          toast.error("This is item is booked alreay.");
          return;
        }
        toast.success("Item is Booked");
        navigate("/dashboard/dashboard/myOrders");
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Please fillup with your information
          </h3>
          <div className="py-4">
            <form
              onSubmit={handleBook}
              className="card-body w-full lg:w-[450px]"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  disabled
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  disabled
                  defaultValue={user?.email}
                  placeholder={user?.email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  name="itemName"
                  disabled
                  defaultValue={productName}
                  className="input input-bordered input-success"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  disabled
                  defaultValue={resalePrice}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact</span>
                </label>
                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="Your Contact Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Meeting Location"
                  className="input input-bordered"
                />
              </div>
              <button type="submit" className="btn">
                Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    // <>
    //  <div className="modal-box">
    //       <h3 className="font-bold text-lg">
    //         Please fillup with your information
    //       </h3>
    //       <div className="py-4">
    //         <form
    //           onSubmit={handleBook}
    //           className="card-body w-full lg:w-[450px]"
    //         >
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Name</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="name"
    //               disabled
    //               defaultValue={user?.displayName}
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Email</span>
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               disabled
    //               defaultValue={user?.email}
    //               placeholder={user?.email}
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Item Name</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="itemName"
    //               disabled
    //               defaultValue={productName}
    //               className="input input-bordered input-success"
    //             />
    //           </div>

    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Price</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="price"
    //               disabled
    //               defaultValue={resalePrice}
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Contact</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="contact"
    //               required
    //               placeholder="Your Contact Number"
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Location</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="location"
    //               required
    //               placeholder="Meeting Location"
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <button type="submit" className="btn">
    //             Book
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    // </>
  );
};

export default BookModal;
