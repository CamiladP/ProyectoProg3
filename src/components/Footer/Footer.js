import React , {Component} from "react"
import "./footer.css"

class Footer extends Component {

    constructor(){
        super()
        this.state = {}
    }

    render(){
        return( <footer>
            <ul className="team">
                <p className="nombres">Maria Camila de Paul - Macarena Montoya - Valentina Socin Casas</p>
                
            </ul>
        </footer>)
    }
}

export default Footer

