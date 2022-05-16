import {React} from "react";
import '../css/home.css';
import NavigationBar from '../components/NavigationBar';
import MainRegisterModule from '../components/MainRegisterModule';

const Home = () => {
    return (
      <>
      <NavigationBar></NavigationBar>
      <div className="wrapper-content">
        <h1>Home</h1>
      </div>
      </>
    );
}

export default Home;