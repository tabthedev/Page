import { Component } from 'react'
import './Box.css'

export default class v1_Box extends Component {
    constructor() {
        super()
    }
    render() {
        return <div id="v1_Box">
            {this.props.children}
        </div>
    }
}