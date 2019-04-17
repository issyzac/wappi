import React, {Component} from 'react'
import '../assets/css/homepage.css'

class HomeMain extends Component {

    render(){
        return (
            <div className="main-contents container-fluid">
                <div className="container">
                    <div className="row banner justify-content-center">
                        <div className="col-md-6 col-sm-12 banner-left">
                            <div className="row align-items-center">
                                <div className="col-md-auto slogan">
                                    <h1> <b><u> wappi. </u></b> </h1>
                                    <h4><b> Worldclass Apps Inc. </b> </h4>
                                    <h6>Experts in Mobile Applications Development and Data science </h6>
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