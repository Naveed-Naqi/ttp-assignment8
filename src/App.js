import React from "react";
import TableRow from "./components/TableRow";
import "./App.css";
import SingleCell from "./components/SingleCell";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 1,
      rows: 1,
      color: "",
      fillAll: false,
      fillUncolored: false
    };
  }

  addCol = () => this.setState({ cols: this.state.cols + 1 });

  addRow = () => this.setState({ rows: this.state.rows + 1 });

  removeCol = () => this.setState({ cols: this.state.cols - 1 });

  removeRow = () => this.setState({ rows: this.state.rows - 1 });

  selectColor = () => {
      return this.state.color;
  }

  myStates = () => {

    let status = this.state;

    if(this.state.fillAll || this.state.fillUncolored) {
        this.setState({
            fillAll: false,
            fillUncolored: false
        });
    }

    return status;
  }

  displayCols = () => {
        
    let numCols = this.state.cols;
    let arr = [];
    
    for(let i = 0; i < numCols; i++) {
        arr.push(<SingleCell myStates={this.myStates} />);
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

    fillAllCells = () => {
        this.setState({
            fillAll: true
        })
    }

    fillAllEmptyCells = () => {
        this.setState({
            fillUncolored: true
        })
    }



  render() {

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

        <button tyep="button" onClick={this.fillAllCells}>
            Fill All Cells
        </button>

        <button tyep="button" onClick={this.fillAllEmptyCells}>
            Fill All Empty Cells
        </button>

        <select onChange={ (event) => {this.setState({color: event.target.value})}}>
            <option value="white">White</option>
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
