import {React} from "react";
import '../css/home.css';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
    return (
      <>
        <NavigationBar></NavigationBar>
        <div>
            <p>Home screen</p>
        </div>
      </>
    );
}

export default Home;