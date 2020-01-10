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

    render() {

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

        return (
            <td
                style={{backgroundColor: this.state.cellColor}} 
                onClick={this.handleColor} 
            ></td>
        );
    }

}
