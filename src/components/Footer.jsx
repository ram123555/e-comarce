const Footer = () => {
  return (
    <footer
      className="text-white pt-5 pb-3"
      style={{
        background: "linear-gradient(90deg,#007bff,#28a745)"
      }}
    >
      <div className="container">

        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">MyShop</h5>
            <p>
              Your one-stop online store for the best products.
              Quality items with fast delivery and great service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>

            <ul className="list-unstyled">

              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>

              

            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact</h5>

            <p>📞 +91 9876543210</p>
            <p>📧 support@myshop.com</p>
            <p>📍 India</p>

          </div>

        </div>

        {/* Bottom */}
        <hr className="border-light" />

        <div className="text-center">
          © 2026 MyShop. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;