import React, {Component} from 'react'

import NavMenu from '../components/NavMenu.jsx'
import HomeMain from '../components/HomeMain.jsx'
import OurTechnology from '../components/OurTechnology.jsx'
import Portfolio from '../components/Portfolio.jsx'
import ContactUs from '../components/ContactUs.jsx'
import Footer from '../components/Footer.jsx'
import '../assets/css/homepage.css'

class HomePage extends Component {


    render() {
        return (
            <div className="container-fluid home-menu">
                <NavMenu />
                <div className="contents" data-spy="scroll" data-target="#navbar-wappi" data-offset="0">
                    <HomeMain />
                    <OurTechnology />
                    <hr />
                    <Portfolio />
                    <hr />
                    <ContactUs />
                </div>
                <Footer />
            </div>

        )
    }

}


export default HomePage