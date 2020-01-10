import React from "react";
import TableRow from "./components/TableRow";
import "./App.css";
import SingleCell from "./components/SingleCell";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 1,
      rows: 1
    };
  }

  addCol = () => this.setState({ cols: this.state.cols + 1 });

  addRow = () => this.setState({ rows: this.state.rows + 1 });

  removeCol = () => this.setState({ cols: this.state.cols - 1 });

  removeRow = () => this.setState({ rows: this.state.rows - 1 });

  displayCols = () => {
        
    let numCols = this.state.cols;
    let arr = [];
    
    for(let i = 0; i < numCols; i++) {
        arr.push(<SingleCell />);
    }

    return arr;
}

  displayRow = () => {

    let numRows = this.state.rows;
    let arr = [];

    for(let i = 0; i < numRows; i++) {
        arr.push(<TableRow cols = {this.displayCols()} />);
    }

    return arr;
  }



  render() {
    console.log(this.state.cols);
    console.log(this.state.rows);

    let arr = this.displayRow();

    return (

      <div className="App">
        <button tyep="button" onClick={this.addCol}>
          Increment Col
        </button>

        <button tyep="button" onClick={this.addRow}>
          Increment Row
        </button>

        <button tyep="button" onClick={this.removeCol}>
          Decrement Col
        </button>

        <button tyep="button" onClick={this.removeRow}>
        Decrement Row
        </button>

        <select>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="purple">Purple</option>
        </select>

        <table id="main-grid">
          <tr>
            {arr.map( (elem) => {
                return elem;
            })}
          </tr>
        </table>
      </div>
    );
  }
}
