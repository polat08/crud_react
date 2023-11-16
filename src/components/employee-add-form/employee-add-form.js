
import {Component} from 'react';
import './employee-add-form.css';

class EmployeeAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render () {
    const {name,  salary} = this.state;
    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form
          className="add-form d-flex">
          <input type="text"
            className="form-control new-post-label"
            placeholder="Employee's name?"
            name="name"
            onChange={this.onValueChange}
            value={name}/>
          <input type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
            name="salary"
            onChange={this.onValueChange}
            value={salary}/>

          <button type="submit"
            className="btn btn-outline-light">Add</button>
        </form>
      </div>
    )
  }
  
}

export default EmployeeAddForm;