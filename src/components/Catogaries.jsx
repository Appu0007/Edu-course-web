import React from 'react'

function Catogaries(props) {
    function onFilterValueChange(event){
        props.onFilterValueSelected(event.target.value)
    }
  return (
    <div>
          <div className="dropdown">
          <label className="category">category:</label>
          <select name='isAvailable' className="button"  onChange={onFilterValueChange}>
            <option  className="option" value="frontend">
              frontend
            </option>
            <option className="option" value="backend">
              backend
              
            </option>
            <option className="option" value="All">
              All
            </option>
          </select>
        </div>
    </div>
  )
}

export default Catogaries