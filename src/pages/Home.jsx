import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Testimonial from "../components/Testimonial";

const products = [
 
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 1299,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
  },
 
  {
    id: 6,
    name: "Gaming Mouse",
    price: 999,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 3499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 8,
    name: "LED Monitor",
    price: 8999,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
  },
  {
    id: 9,
    name: "DSLR Camera",
    price: 45999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
  },
  {
    id: 10,
    name: "Smartphone",
    price: 19999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 11,
    name: "Tablet",
    price: 14999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
  },
  {
    id: 12,
    name: "Fitness Band",
    price: 1999,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6"
  },
  {
    id: 13,
    name: "Power Bank",
    price: 899,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5"
  },
  {
    id: 14,
    name: "USB Headset",
    price: 1299,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215"
  },
  {
    id: 15,
    name: "Office Chair",
    price: 5999,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
  },
  {
    id: 16,
    name: "Study Table",
    price: 6999,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
  },
  {
    id: 17,
    name: "Wireless Earbuds",
    price: 2499,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
  },
  {
    id: 18,
    name: "Gaming Controller",
    price: 3499,
    image: "https://images.unsplash.com/photo-1606813902737-17b9f4c2e66b"
  },
  {
    id: 19,
    name: "Portable SSD",
    price: 7999,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
  },
  {
    id: 20,
    name: "4K Smart TV",
    price: 45999,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6"
  }
];

const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;

  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>

      {/* HERO */}
      <div
        className="text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage:
            "url('https://webengage.com/wp-content/uploads/2023/05/Hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "55vh"
        }}
      >
        <h1 className="display-3 fw-bold">
          Welcome To My Shop
        </h1>

        <p className="lead text-white fw-semibold fs-4">
          Best Products Online
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="container py-5">

        <h2 className="text-center mb-5 fw-bold">
          Our Products
        </h2>

        <div className="row g-4">

          {currentProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}

        </div>

        {/* PAGINATION */}
        <nav className="mt-5">
          <ul className="pagination justify-content-center">

            {[...Array(totalPages)].map((_, index) => (

              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>

            ))}

          </ul>
        </nav>

      </div>

      {/* TESTIMONIAL */}
      <Testimonial />

    </div>
  );
};

export default Home;