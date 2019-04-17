import React, {Component} from 'react'

import '../assets/css/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Footer extends Component {
    render() {
        return (
            <div className="wappi-footer footer">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col my-4">
                            <ul class="navbar-nav fa-pull-right list-group-horizontal">
                                <li className="insta-icon">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="#FFFFFF"/>
                                </li>
                                <li className="twitter-icon"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"
                                                                              color="#FFFFFF"/></li>
                                <li className="in-icon"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"
                                                                         color="#FFFFFF"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;