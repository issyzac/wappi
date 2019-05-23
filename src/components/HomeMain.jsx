import React, {Component} from 'react'
import '../assets/css/homepage.css'
import logo from '../assets/images/wappi.png';

class HomeMain extends Component {

    render(){
        return (
            <div className="main-contents container-fluid">
                <div className="container">
                    <div className="row banner justify-content-center">
                        <div className="col-md-6 col-sm-12 banner-left">
                            <div className="row align-items-center">
                                <div className="col-md-auto slogan">
                                    <img className="logo-image" src={logo} alt="Logo"/>
                                    <h4><b> Wappi; Mobile and Data science Labs. </b> </h4>
                                    <h6>Worldclass Apps Inc.</h6>
                                    <button className="btn btn-outline-info btn-lg"> Reach Out to Us </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 banner-right hide-mobile">
                            <div className="illustration">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeMain