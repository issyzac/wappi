import React, {Component} from 'react'

class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="container contact-us" id="contact">
                <h1 className="font-weight-bold display-4">Your Next Step With Us.</h1>
                <div className="row">
                    <div className="col hire-us ">
                        <h1>Have a project? lets talk about it!</h1>
                        <p> if you have a project that require world class execution, do not hesitate to reach out to us, just drop us your email address here. </p>
                        <div className="input-group mb-5">
                            <input type="text" className="form-control" placeholder="my@email.com" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-info btn-lg"> Lets meet for coffee! </button>
                                </div>
                        </div>
                    </div>
                    <div className="bordered"></div>
                    <div className="col join-us">
                        <h1 className="">Think you are talented enough?</h1>
                        <p> We always welcome folks with amazing talents and a can't-quit-untill-its-done kinda attitude. You think you are one? </p>
                        <button className="btn btn-outline-info btn-lg"> Join Us </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ContactUs