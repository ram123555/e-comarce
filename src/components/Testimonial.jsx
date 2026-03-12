const Testimonial = () => {
  return (

    <div className="bg-light p-5 mt-5">

      <h2 className="text-center mb-4">
        Customer Reviews
      </h2>

      <div className="row">

        <div className="col-md-4">
          <div className="card p-3 shadow">
            ⭐⭐⭐⭐⭐
            <p>Amazing product quality.</p>
            <b>Rahul</b>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            ⭐⭐⭐⭐⭐
            <p>Fast delivery and good support.</p>
            <b>Priya</b>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            ⭐⭐⭐⭐⭐
            <p>Best shopping experience.</p>
            <b>Amit</b>
          </div>
        </div>

      </div>

    </div>

  );
};

export default Testimonial;