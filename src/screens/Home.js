import {React} from "react";
import '../css/home.css';
import NavigationBar from '../components/NavigationBar';
import MainRegisterModule from '../components/MainRegisterModule';

const Home = () => {
    return (
      <>
      <NavigationBar></NavigationBar>
      <div className="wrapper-content">
        <MainRegisterModule></MainRegisterModule>
      </div>
      </>
    );
}

export default Home;