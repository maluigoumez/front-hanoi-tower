import React, { Component } from "react";
import Header from "./Header.js"; // Adjust the import statement according to your file structure
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numDisks: "",
      moves: [],
      error: null,
    };
  }

  // handleNumDisksChange = (event) => {
  //   this.setState({ numDisks: event.target.value });
  // };

  handleNumDisksChange = (event) => {
    const value = event.target.value;
    console.log("numDisks:", value); // Add console log here
    this.setState({ numDisks: value });
  };

  fetchMoves = () => {
    fetch(`http://localhost:3000/testApi?numDisks=${this.state.numDisks}`)
      .then((res) => {
        console.log("Response status:", res.status);
        console.log("Response headers:", res.headers);
        if (!res.ok) {
          throw new Error("Failed to fetch data.");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        this.setState({ moves: data.moves, error: null });
      })
      .catch((error) => {
        console.error("Error fetching moves:", error);
        this.setState({
          moves: [],
          error: "Failed to fetch data. Please try again.",
        });
      });
  };

  render() {
    const { numDisks, moves, error } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="controls">
          <input
            type="number"
            placeholder="Number of disks"
            value={numDisks}
            onChange={this.handleNumDisksChange}
          />
          <button onClick={this.fetchMoves}>See movements</button>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="moves">
          <h2>Movements:</h2>
          <ul>
            {moves.map((move, index) => (
              <li key={index}>
                Disk {move.disk} moved from {move.from} to {move.to}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
