import React, {Component} from 'react';
import HomeImage from "./home1.jpeg";

class Home extends Component {
    render() {
        return (
            <div>
                <img className="home__image" src={HomeImage} alt="Rental pages" />
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
