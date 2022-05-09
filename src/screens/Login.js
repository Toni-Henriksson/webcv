import {React} from "react";
import '../css/home.css';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
        <main>
          <h2>LOGIN</h2>
          <p>YAYYYYYY</p>
        </main>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </nav>
      </>
    );
}

export default Login;