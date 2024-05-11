import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const[formData, setFormData] = useState({
    firstname:"", lastname:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false,
    pushNotification:""
  }) 

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked:value}));

  }

  function submitHandler(event){
    event.preventDefault();

    console.log("finally pronting the data");
    console.log(formData); 

  }
  
  return (
    <div className="flex flex-col items-centre">
     <form onSubmit={submitHandler}>
      <label>First name</label>
      <br></br>
      <input 
      type="text"
       name="firstname"
       id='firstname'
      placeholder='lak'
       value = {formData.firstname}
       onChange={changeHandler}
       className="outline"
       
 />
 <br></br>
 <label>last name</label>
      <br></br>
      <input 
      type="text"
       name="lastname"
       id='lastname'
      placeholder='lastname'
       value = {formData.lastnamename}
       onChange={changeHandler}
       className="outline"    
 />
 
       <br></br>
        <label>Email Address </label>
      <br></br>
      <input 
      type="email"
       name="email"
       id='email'
      placeholder='lak@gmail.com'
       value = {formData.email}
       onChange={changeHandler}
       className="outline"
       />
  <br>
  </br>
       <label htmlFor='country'>Country</label>

       <select
       id='country'
       name='country'
       value={formData.country}
       onChange={changeHandler}
       >
        <option> India </option>
        <option> meicxo</option>
        <option> australia </option> 
        <option> dubai </option>
         <option> africa </option>
       </select>

       <br></br>
       <label>Street Address</label>
      <br></br>
      <input 
      type="text"
       name="streetAddress"
       id='streetAddress'
      placeholder='lak'
       value = {formData.streetAddress}
       onChange={changeHandler}
       className="outline"    
 />

 <br></br>
 <label>City</label>
      <br></br>
      <input 
      type="text"
       name="city"
       id='city'
      placeholder='lak'
       value = {formData.city}
       onChange={changeHandler}
       className="outline"    
 />
 <br></br>
 <label>State</label>
      <br></br>
      <input 
      type="text"
       name="state"
       id='state'
      placeholder='lak'
       value = {formData.state}
       onChange={changeHandler}
       className="outline"    
 />
 <br></br>
 <label>PostalCode</label>
      <br></br>
      <input 
      type="number"
       name="postalcode"
       id='postalcode'
      placeholder='lak'
       value = {formData.postalCode}
       onChange={changeHandler}
       className="outline"    
 />

    <fieldset>
      <legend> 
        BY Email
      </legend>
      <div className='flex'>
      <input 
      id='comments'
      name='comments'
      type='checkbox'
      checked={formData.comments}
      onChange={changeHandler}
      />

      <div>
        <label htmlFor='comments'>Comments</label>
        <p>get ntified when someone a commonent on posting</p>
        </div>
      </div>

      <div className='flex'>
      <input 
      id='candidates'
      name='candidates'
      type='checkbox'
      checked={formData.candidates}
      onChange={changeHandler}
      />

      <div>
        <label htmlFor='candidate'>Candidate</label>
        <p>get ntified when candidate apply for job</p>
        </div>
      </div>

      <div className='flex'>
      <input 
      id='offers'
      name='offers'
      type='checkbox'
      checked={formData.offers}
      onChange={changeHandler}
      />

      <div>
        <label htmlFor='offers'>Offers</label>
        <p>get ntified when candidate accept or reject</p>
        </div>
      </div>

      
    </fieldset>

    <fieldset>
      <legend>Push Notification</legend>
      <p>theses are deleiverewd via sms</p>

      <input
      type='radio'
      id='pusheverything'
      name='pushNotification'
      value='everything'
      onChange={changeHandler}      
      />

      <label htmlFor='pusheverything'>Everything</label>
    </fieldset>

    <br></br>

    <button>Save</button>
 

      
      
      
       </form>
    </div>
  );
}

export default App;
