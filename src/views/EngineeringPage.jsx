import React, {Component} from 'react'
import NavMenu from '../components/NavMenu.jsx'
import '../assets/css/engineering.css'

class EngineeringPage extends Component {

    constructor(){
      this.state = {

      }
    };

    render(){
        return(
            <div classNam="engineering-header container display-2">
                Welcome to <b>Wappu Engineering</b>, where our secret source lives.
            </div>
        )
    }
}

export default EngineeringPage