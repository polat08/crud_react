import EmployeeListItem from "../employee-list-item/employee-list-item";
import './employee-list.css';

const EmployeeList = ({data, onDelete}) => {

  const elements = data.map(item => {
    const{id, ...itemProps} = item;
    return (
      <EmployeeListItem 
      key={id}
      {...itemProps}
      onDelete={() => onDelete(id)}/>
      // <EmployeeListItem key={id} name={item.name} salary={item.salary}/> same line
    )
  })
  
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeeList;