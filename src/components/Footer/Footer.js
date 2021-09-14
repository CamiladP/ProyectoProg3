import React , {Component} from "react"


class Footer extends Component {

    constructor(){
        super()
        this.state = {}
    }

    render(){
        return( <footer>
            <ul className="team">
                <p>Maria Camila de Paul</p>
                <p>Valentina Socin Casas</p>
                <p>Macarena Montoya</p>
            </ul>
        </footer>)
    }
}

export default Footer

