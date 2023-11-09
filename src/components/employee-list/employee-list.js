import EmployeeListItem from "../employee-list-item/employee-list-item";
import './employee-list.css';

const EmployeeList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeeListItem name="Jack F." salary={3000}/>
      <EmployeeListItem name="Wil H." salary={5000}/>
      <EmployeeListItem name="Greg B." salary={600}/>
    </ul>
  )
}

export default EmployeeList;