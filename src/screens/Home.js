import {React} from "react";
import '../css/home.css';
import NavigationBar from '../components/NavigationBar';
import MainModule from '../components/MainModule';

const Home = () => {
    return (
      <>
      <NavigationBar></NavigationBar>
      <div className="wrapper-content">
        <MainModule></MainModule>
      </div>
      </>
    );
}

export default Home;