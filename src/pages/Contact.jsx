const Contact = () => {

  return (

    <div>

      {/* Header Section */}
      <div
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(90deg,#007bff,#28a745)"
        }}
      >
        <h1 className="fw-bold">Contact Us</h1>
        <p>We would love to hear from you</p>
      </div>

      {/* Contact Section */}
      <div className="container py-5">

        <div className="row g-4">

          {/* Contact Info */}
          <div className="col-md-6">

            <div className="card shadow border-0 p-4">

              <h4 className="mb-3 text-success">
                Get In Touch
              </h4>

              <p>
                📞 Phone : <strong>+91 9876543210</strong>
              </p>

              <p>
                📧 Email : support@myshop.com
              </p>

              <p>
                📍 Address : Kolkata, India
              </p>

              <div className="mt-3">

                <a
                  href="tel:+919876543210"
                  className="btn btn-primary me-3"
                >
                  📞 Call Now
                </a>

                <a
                  href="https://wa.me/919876543210"
                  className="btn btn-success"
                >
                  💬 WhatsApp Us
                </a>

              </div>

            </div>

          </div>

          {/* Map */}
          <div className="col-md-6">

            <div className="card shadow border-0">

              <iframe
                title="map"
                className="w-100"
                height="350"
                src="https://maps.google.com/maps?q=kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Contact;