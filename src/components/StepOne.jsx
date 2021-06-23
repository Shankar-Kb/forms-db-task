import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const StepOne = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const [buttonHidden, setButtonHidden] = useState(true);

    useEffect(() => {
        if(name.length > 0 && email.length > 0){
          setButtonHidden(false);
        }else{
          setButtonHidden(true);
        }
      }, [name, email])

      useEffect(() => {
        setName(window.localStorage.getItem('name'));
        setEmail(window.localStorage.getItem('email'));
        setGender(window.localStorage.getItem('gender'));
        setDateOfBirth(window.localStorage.getItem('dateOfBirth'));
      }, []);
    
      useEffect(() => {
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('gender', gender);
        window.localStorage.setItem('dateOfBirth', dateOfBirth);
      }, [name, email, gender, dateOfBirth]);


    return(

        <div className="container-fluid col-6 offset-3">

        <div className="personal-details-box">
        <h2 className="title">Personal Details: </h2>

        <label htmlFor="name" className="input-group">
          Enter your name :{" "}
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />

        <label htmlFor="email" className="input-group mt-2">
        Enter your mail :{" "}
        </label>
        <input
          type="text"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <br />

        <label htmlFor="gender" className="input-group mt-2">
        Select your Gender :{" "}
        </label>
        <select
          className="custom-select"
          value={gender}
          onChange={(e) => {
            const selectedGender = e.target.value;
            setGender(selectedGender);
          }}
          >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </ select>
        <br />

        <label htmlFor="DOB" className="input-group mt-2">
        Select your DOB :{" "}
        </label>
        <input
          type="date"
          id="DOB"
          className="form-control"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          placeholder="Enter your email"
        />
        <br />
       
        <Link className="button" disabled={buttonHidden} to={`/step-two`}><h3>Next</h3></Link>
        </div>

        </div>

    )
}

export default StepOne;