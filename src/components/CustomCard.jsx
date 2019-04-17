import React, {Component} from 'react'

class CustomCard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        //Logic Goes here
        const cardIcon = this.props.cardIcon;
        const cardText = this.props.cardText;

        return(
            <div className="card" style="width: 18rem;" >
                <div className="card-img-top">
                    {cardIcon}
                </div>
                <div className="card-body">
                    <p className="card-text"> {cardText} </p>
                </div>
            </div>
        )
    }

}

export default CustomCard