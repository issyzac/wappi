import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavMenu extends Component {

    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light" id="navbar-wappi">
                <a class="navbar-brand my-1" href="#">
                    <FontAwesomeIcon icon={['fab', 'ioxhost']} size="2x" color="#FFFFFF"/>
                    <span> wappi. </span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav nav-pills">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#technology">Technology</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact Us</a>
                        </li>
                        <li class="nav-item justify-content-center align-content-center nav-separator ">
                            <h2> | </h2>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Wappi Engineering</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default (NavMenu)