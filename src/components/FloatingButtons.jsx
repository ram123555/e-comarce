import { useState, useEffect } from "react";

const FloatingButtons = () => {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

    <>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000,
          textDecoration: "none"
        }}
      >
        💬
      </a>

      {/* Scroll To Top Button */}
      {showTop && (

        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "linear-gradient(90deg,#007bff,#28a745)",
            color: "white",
            border: "none",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            fontSize: "20px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            zIndex: 1000
          }}
        >
          ↑
        </button>

      )}

    </>

  );
};

export default FloatingButtons;