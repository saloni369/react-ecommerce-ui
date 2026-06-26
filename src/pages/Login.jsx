import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>Login to continue shopping</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="login-options">

            <label>

              <input type="checkbox" />

              Remember Me

            </label>

            <Link to="#">Forgot Password?</Link>

          </div>

          <button className="login-btn">

            Login

          </button>

        </form>

        <div className="divider">

          OR

        </div>

        <button className="google-btn">

          Continue with Google

        </button>

        <p className="register-text">

          Don't have an account?

          <Link to="/register">

            Register

          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;