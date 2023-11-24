import React from "react";


class Season extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     }

 handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Your favorite lable is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="formbuyhs">
        <form onSubmit={this.handleSubmit}>
          <label className="season">
            Pick your favorite LABLE:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Season</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
       
      </div>
    );
  }
}

export { Season };