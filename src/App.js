import {React, Component} from "react";
import {TableRow, SingleCell} from "./components";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 1,
      rows: 1,
      color: "",
      fillAll: false,
      fillUncolored: false,
      isMouseDown: false
    };
  }

  addCol = () => this.setState({ cols: this.state.cols + 1 });

  addRow = () => this.setState({ rows: this.state.rows + 1 });

  removeCol = () => this.setState({ cols: this.state.cols - 1 });

  removeRow = () => this.setState({ rows: this.state.rows - 1 });

  /**
   * Gives child component access to parent state.
   */

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


  /**
   * Creates an array holding all SingleCells.
   */

  displayCols = () => {
        
    let numCols = this.state.cols;
    let arr = [];
    
    for(let i = 0; i < numCols; i++) {
        arr.push(<SingleCell key={i} myStates={this.myStates} />);
    }

    return arr;
}


    /**
     * Creates an array holding all TableRows
     */
    displayRow = () => {

        let numRows = this.state.rows;
        let arr = [];

        for(let i = 0; i < numRows; i++) {
            arr.push(<TableRow key={i} cols = {this.displayCols()} />);
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

        <table id="main-grid" 
            onMouseDown={ () => this.setState({isMouseDown: true})}
            onMouseUp={ () => this.setState({isMouseDown: false})}>
            <tbody>
                {arr.map( (elem) => {
                    return elem;
                })}
            </tbody>
        </table>
      </div>
    );
  }
}
