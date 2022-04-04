import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import './Bmi.css'
class Bmi extends Component {
  constructor() {
    super();
    this.bmiCalc = this.bmiCalc.bind(this);
    this.state = {
      weight: "initial weight",
      height: "initial height"
    };
  }

  bmiCalc() {
    //Calculates the bmi
    const bmi =
      Math.round(
        (this.state.weight / (this.state.height * this.state.height)) *
          10000 *
          10
      ) / 10;

    if (bmi < 18.5) {
      this.setState({ judge: "Underweight" });
    } else if (bmi < 24.9) {
      this.setState({ judge: "Normal weight" });
    } else if (bmi < 30) {
      this.setState({ judge: "Overweight" });
    } else {
      this.setState({ judge: "Obesity" });
    }

    this.setState({ bmi: bmi });

   
  }

  reset() {
    this.setState({
      weight: "initial weight",
      height: "initial height",
      bmi: "",
      judge: ""
    });
  }

  setWeight(e) {
    this.setState({ weight: e.target.value });
  }
  setHeight(e) {
    this.setState({ height: e.target.value });
  }

  render() {
    return (<body id="body" background="pict.jpg">
    <form >
        <div class="container" id="container">
            <div class="panel">
                <h2 class="text-center" id="h2"><strong>Check your BMI</strong></h2>
                <form>
                    <div id="weightInput">
                        <p id="p1">Enter Weight : </p>
                        <div class="input-group mb-3">
                            
                            <input type="number"
                              placeholder="Weight in [kg]"
                              value={this.state.weight}
                              onChange={this.setWeight.bind(this)}
                            />
                        </div>
                        
                    </div>
                    <div id="heightInput">
                        <p id="p2">Enter Height :</p>
                        <div class="input-group mb-3">
                            
                            <input type="number"
                              placeholder="Height in [cm]"
                              value={this.state.height}
                              onChange={this.setHeight.bind(this)}
                             />
                        </div>
                    
                    </div>
                    
                    <button type="button" class="btn btn-primary" onClick={this.bmiCalc.bind(this)} >Calculate</button>
                    <button type="button" class="btn btn-primary" onClick={this.reset.bind(this)} >Reset</button>
                </form>
                <div id="results" class="text-center">Your BMI results will appear here</div>


              <span className="response">  BMI: {this.state.bmi}</span>
              <span className="response">Judge: {this.state.judge}</span>
              <p><Link to='/home'>Back To Home</Link></p>
            
      </div>
      </div>
    </form>
  </body>
    );
  }
}
export default Bmi




