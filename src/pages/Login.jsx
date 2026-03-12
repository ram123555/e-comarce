import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // save login session
    localStorage.setItem("user", email);

    console.log({
      email,
      password
    });

    alert("Login Successful");

    // redirect to home page
    navigate("/");
  };

  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow border-0 p-4">

            <h3 className="text-center mb-4 fw-bold">
              Login
            </h3>

            <form onSubmit={handleLogin}>

              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />

              <button className="btn btn-success w-100">
                Login
              </button>

            </form>

            <p className="text-center mt-3">
              Don't have an account?{" "}
              <Link to="/register">
                Register
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Login;