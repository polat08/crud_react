import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button 
      className="btn btn-light"
      type='button'>
        All employees
      </button>
      <button
        className="btn btn-outline-light"
        type='button'>
        On the rise
      </button>
      <button
        className="btn btn-outline-light"
        type='button'>
        Wages over $1,000
      </button>
    </div>
  )
}
export default AppFilter;