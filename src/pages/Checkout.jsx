import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {

  const { totalPrice } = useContext(CartContext);

  return (

    <div className="container py-5">

      <h2 className="text-center mb-4">
        Checkout
      </h2>

      <form className="col-md-6 mx-auto">

        <input
          type="text"
          placeholder="Full Name"
          className="form-control mb-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
        />

        <input
          type="text"
          placeholder="Address"
          className="form-control mb-3"
        />

        <h4>Total Payment: ₹{totalPrice}</h4>

        <button className="btn btn-primary w-100 mt-3">
          Place Order
        </button>

      </form>

    </div>

  );

};

export default Checkout;