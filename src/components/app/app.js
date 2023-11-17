import {Component} from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Jack F.', salary: 3000, increase: true, id: 1 },
        { name: 'Wil H.', salary: 5000, increase: false, id: 2 },
        { name: 'Greg B.', salary: 600, increase: false, id: 3 },
      ]
    }
    this.maxId = 4;
  }
  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }
  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />

        </div>
        <EmployeeList 
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeeAddForm />
      </div>
    );
  }

}

export default App;