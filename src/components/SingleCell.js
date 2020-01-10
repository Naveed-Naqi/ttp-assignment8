import React from "react";
import "./SingleCell.css";

export default class SingleCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cellColor: ""
        };
    }

    handleColor = () => {
        this.setState({ cellColor: this.props.myStates().color });
    }

    /**
     * Handles the mousing over to change color of the component.
     */

    handleMouseOver= () => {

        let isMouseDown = this.props.myStates().isMouseDown;

        if(isMouseDown) {
            this.setState({
                cellColor: this.props.myStates().color
            });
        }
    }

    
    /**
     * Changes the state if the props change.
     * Used for re-rendering the cells for the FillAllCells and FillAllEmptyCells
     */
    componentDidUpdate(prevProps, prevState) {

        if(prevProps !== this.props) {
            let myStates = this.props.myStates();

            let isFilled = myStates.fillAll;
            let isUnfilled = myStates.fillUncolored;
    
            if(isFilled || (isUnfilled && this.state.cellColor === "")) {
                this.setState({
                    cellColor: this.props.myStates().color
                })
            }
    
        }

    }

    render() {

        return (
            <td
                style={{backgroundColor: this.state.cellColor}} 
                onClick={this.handleColor} 
                onMouseOver={this.handleMouseOver}
            ></td>
        );
    }

}
