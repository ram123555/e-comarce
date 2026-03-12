import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ id, name, price, image }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">

      <div className="card h-100 shadow-sm border-0">

        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="card-img-top"
          style={{
            height: "200px",
            objectFit: "cover"
          }}
        />

        {/* Card Body */}
        <div className="card-body d-flex flex-column text-center">

          <h5 className="card-title fw-semibold">
            {name}
          </h5>

          <p className="text-success fw-bold fs-5">
            ₹{price}
          </p>

          <button
            className="btn btn-primary mt-auto"
            onClick={() => addToCart({ id, name, price, image })}
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;