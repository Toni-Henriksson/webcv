import {React} from "react";
import '../css/home.css';
import { Link } from "react-router-dom";
const Home = () => {
    return (
      <>
        <main>
          <h2>HOME</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </>
    );
}

export default Home;