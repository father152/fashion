import React from "react";
 


class Label extends React.Component {
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
       alert("Your favorite lable is: " + this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <div className="formbuyhs">
        <form onSubmit={this.handleSubmit}>
          <label className="label">
            Pick your favorite LABLE:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">Lable</option>
              <option value="hm">H&M</option>
              <option value="coco">Coco</option>
              <option value="puma">Puma</option>
              <option value="nike">Nike</option>
              <option value="apple">Apple</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
      
        </form>
      
      </div>
    );
  }
}

export { Label };