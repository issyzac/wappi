import React, {Component} from 'react'

class Portfolio extends Component {
    render() {
        return (
            <div className="container-fluid portfolio" id="portfolio">
                <div className="row portfolio-phone">
                    <div className="col phone-illustration"></div>
                    <div className="col phone-message text-body">
                        <h1 className="font-weight-bold display-4">Your next App,<br />our best yet!</h1>
                        <p> As a <b className="site-bold">leading</b> mobile application development company, Wappi will
                            make you
                            a <b className="site-bold">high performing</b>, digitally transformative and feature-packed
                            native mobile
                            applications for <b className="site-bold">all the major mobile platforms</b> including iOS,
                            Android </p>
                        <button className="btn btn-outline-info btn-lg"> Lets go to work!</button>
                    </div>
                </div>
                <div className="container-fluid portfolio-site">
                    <div className="container">
                        <div className="row">
                            <div className="col site">
                                <h1 className="font-weight-bold display-4 float-right">Strong backend matters!</h1>
                                <p> With machine learning powered analytics and eye catching design we believe you need
                                    to have <b className="site-bold">the best online presence</b> and experience for
                                    your users while making the most out of
                                    every visit and click on your site so as to maximize your <b className="site-bold">business</b>
                                    potential on <b className="site-bold">every
                                        single visit</b>.
                                </p>
                                <button className="btn btn-outline-info btn-lg"> Make me One!</button>
                            </div>
                            <div className="col site-illustration"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio