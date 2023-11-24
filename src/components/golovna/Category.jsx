import React from "react";


class Category extends React.Component {
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
          <label className="label">
            Pick your favorite CATEGORY:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Category</option>
              <option value="man">Man</option>
              <option value="women">Women</option>
              <option value="children">Children</option>
              <option value="oldmen">Old Man</option>
              <option value="oldwomen">Old Women</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
       
      </div>
    );
  }
}

export { Category };