import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const handleRegister = (e) =>{
    e.preventDefault();

    console.log(form);

    alert("Registration Successful");
  };

  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h3 className="text-center mb-4">
              Register
            </h3>

            <form onSubmit={handleRegister}>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />

              <button className="btn btn-primary w-100">
                Register
              </button>

            </form>

            <p className="text-center mt-3">
              Already have an account?  
              <Link to="/login"> Login</Link>
            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Register;