import React, {Component} from 'react'
import CustomCard from './CustomCard.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class OurTechnology extends Component {

    render() {
        return (
            <div className="our-technology container-fluid" id="technology">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="technology-title col-md-auto">
                            <h2 className="display-4 font-weight-bold"><b>Our Stack</b></h2>
                            <p class="h4"> Enhance VSCode with the extensions you already know and love. </p>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div className="technologies-list row justify-content-between">
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={['fab', 'python']} size="6x" color="#0d3349"/>
                            <p> Python </p>
                        </div>
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={['fab', 'java']} size="6x" color="#0d3349"/>
                            <p> Java </p>
                        </div>
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={['fab', 'js']} size="6x" color="#0d3349"/>
                            <p> JavaScript </p>
                        </div>
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={['fab', 'html5']} size="6x" color="#0d3349"/>
                            <p> Html5 </p>
                        </div>
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={['fab', 'react']} size="6x" color="#0d3349"/>
                            <p> React </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default OurTechnology