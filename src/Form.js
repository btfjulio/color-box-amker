import React, {Component} from 'react'
import uuid from 'uuid/v4'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '',
            width: '',
            color: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.createBox(newBox)
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input id="height" name="height" value={this.state.height} type="text" onChange={this.handleChange}/>
                    <label htmlFor="width">Width:</label>
                    <input id="width" name="width" value={this.state.width} type="text" onChange={this.handleChange}/>
                    <label htmlFor="color">Background:</label>
                    <input id="color" name="color" value={this.state.color} type="text" onChange={this.handleChange}/>
                </div>
                <button>Add New Box</button>
            </form>
        )
    }
}

export default Form 