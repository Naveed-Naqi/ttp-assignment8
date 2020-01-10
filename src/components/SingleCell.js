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

    handleOver= () => {

        let isMouseDown = this.props.myStates().isMouseDown;
        console.log(isMouseDown);

        if(isMouseDown) {
            this.setState({
                cellColor: this.props.myStates().color
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps !== this.props) {
            let myStates = this.props.myStates();

            let isFilled = myStates.fillAll;
            let isUnfilled = myStates.fillUncolored;
    
            if(isFilled) {
                this.setState({
                    cellColor: this.props.myStates().color
                })
            }
    
            if(isUnfilled && this.state.cellColor === "") {
    
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
                onMouseOver={this.handleOver}
            ></td>
        );
    }

}
