import React, {Component} from 'react'
import CustomCard from './CustomCard.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ailogo from '../assets/images/007-brain.png'
import machineLearning from '../assets/images/006-ai.png'
import cloud from '../assets/images/001-server.png'
import apps from '../assets/images/004-app.png'
import dataScience from '../assets/images/003-dashboard-1.png'

class OurTechnology extends Component {

    render() {
        return (
            <div className="our-technology container-fluid" id="technology">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="technology-title col-md-auto">
                            <h2 className="display-4 font-weight-bold"><b>Our Technologies</b></h2>
                            <p class="h4"> From day to day usage to research programs and educational technonogies </p>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div className="technologies-list row justify-content-between">
                        <div className="col-md-2">
                            <img className="technologies-logo" src={ailogo} alt="Ai Logo" />
                            <p> Artificial Inteligence </p>
                        </div>
                        <div className="col-md-2">
                            <img className="technologies-logo" src={machineLearning} alt="Ai Logo" />
                            <p> Machine Learning </p>
                        </div>
                        <div className="col-md-2">
                            <img className="technologies-logo" src={cloud} alt="Ai Logo" />
                            <p> Cloud Computing </p>
                        </div>
                        <div className="col-md-2">
                            <img className="technologies-logo" src={apps} alt="Ai Logo" />
                            <p> Mobile Applications</p>
                        </div>
                        <div className="col-md-2">
                            <img className="technologies-logo" src={dataScience} alt="Ai Logo" />
                            <p> Data Science</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default OurTechnology