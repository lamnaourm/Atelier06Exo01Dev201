import React, { Component } from "react";

class Calcul extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleOnchange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    
  };

  render() {
    return (
      <div className="calcul">
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label>Distance : </label>
            <input type="number" name="distance" />
          </div>
          <div>
            <label>Poids : </label>
            <input type="number" name="taux" />
          </div>
          <div>
            <label>Mode de transport : </label>
            <input type="radio" name="mode" /> Express 
            <input type="radio" name="mode" /> Normale 
          </div>
          <hr />
          <input type="submit" value="Calculer" />
          <div>
            <label>Cout total : </label>
            <input type="number" name="cout" />
          </div>
        </form>
      </div>
    );
  }
}

export default Calcul;
