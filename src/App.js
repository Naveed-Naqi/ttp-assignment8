import React from "react";
import TableRow from "./components/TableRow";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 1,
      rows: 1
    };
  }

  AddCol = () => this.setState({ cols: this.state.cols + 1 });

  AddRow = () => this.setState({ rows: this.state.rows + 1 });

  render() {
    console.log(this.state.cols);
    console.log(this.state.rows);

    return (
      <div className="App">
        <button tyep="button" onClick={this.AddCol}>
          Increment Col
        </button>

        <button tyep="button" onClick={this.AddRow}>
          Increment Row
        </button>

        <table id="main-grid">
          <tr>
            <TableRow />
          </tr>
        </table>
      </div>
    );
  }
}
