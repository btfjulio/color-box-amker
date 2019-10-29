import React, { Component } from 'react'
import Form from './Form'
import Box from './Box'

class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes:[]
        };
        this.addBox = this.addBox.bind(this)
    }
    remove(id) {
        this.setState(state => ({
            boxes: this.state.boxes.filter(box => box.id !== id)
        }))
    }
    addBox(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }))
    }
    render() {
        const boxes = this.state.boxes.map((box) => {
            return <Box key={box.id} id={box.id} width={box.width} color={box.color} height={box.height} removeBox={()=>this.remove(box.id)}/>
        })
        return(
            <div>
                <h1>Color Box</h1>
                <Form  createBox={this.addBox} />
                {boxes}
            </div>
        )
    } 
}


export default BoxList 