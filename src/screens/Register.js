import {React} from "react";
import '../css/home.css';
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <>
        <main>
          <h2>Welcome to the REGISTER!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
}

export default Register;