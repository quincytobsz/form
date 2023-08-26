import React from 'react'
import './data.css'

export const Data =({closeData}) =>  {
  return (
    <div className='field-container'>
      <div className='field'>
<form >
   <div className='field-group'>
    <label htmlFor="FirstName">FirstName</label>
    <input name="FirstName"/>
   </div>
   <div className='field-group' >
    <label htmlFor="LastName">LastName</label>
    <input name="LastName"/>
   </div>
   <div className='field-group'>
    <label htmlFor="User Information">User Information</label>
    <select name="Gender">
      <option value="Male">Male</option> 
      <option value="Female">Female</option>
         </select>
         <div className='field-group'>
    <label htmlFor="Email">Email</label>
    <input type='email'/>
   </div>
         <button type="submit" className='btn'>Submit</button>
   </div>
</form>
</div>
    </div>
  )
}
 
export default Data;

