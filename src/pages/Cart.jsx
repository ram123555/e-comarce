import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice
  } = useContext(CartContext);

  return (

    <div className="container py-5">

      <h2 className="text-center mb-4">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center">Cart is empty</p>
      ) : (

        <div className="row g-4">

          {cart.map((item) => (

            <div key={item.id} className="col-md-4">

              <div className="card shadow">

                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body text-center">

                  <h5>{item.name}</h5>

                  <p className="text-success fw-bold">
                    ₹{item.price}
                  </p>

                  {/* Quantity Controls */}
                  <div className="d-flex justify-content-center align-items-center mb-2">

                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className="btn btn-secondary btn-sm ms-2"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>

                  </div>

                  <p>
                    Subtotal: ₹{item.price * item.quantity}
                  </p>

                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

      {/* Total */}
      {cart.length > 0 && (

        <div className="text-center mt-5">

          <h3>Total: ₹{totalPrice}</h3>

          <Link to="/checkout" className="btn btn-success mt-3">
            Checkout
          </Link>

        </div>

      )}

    </div>

  );

};

export default Cart;