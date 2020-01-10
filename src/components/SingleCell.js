import React from "react";
import "./SingleCell.css";

export default class SingleCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedColor: this.props.color,
            cellColor: ""
        };
    }

    handleColor = () => {
        console.log(this.state.selectedColor());
        this.setState({ color: this.state.selectedColor() });
    }

    render() {
        return <td style={{backgroundColor: this.state.color}} onClick={this.handleColor} ></td>;
    }

}
