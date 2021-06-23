import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const StepTwo = () => {

    const [addressLineOne, setAddressLineOne] = useState("");
    const [addressLineTwo, setAddressLineTwo] = useState("");
    const [landmark, setLandmark] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [pinCode, setPinCode] = useState("");

    useEffect(() => {
      const localAddressLineOne = window.localStorage.getItem('addressLineOne') || "";
      setAddressLineOne(localAddressLineOne);
      const localAddressLineTwo = window.localStorage.getItem('addressLineTwo') || "";
      setAddressLineTwo(localAddressLineTwo);
      const localLandmark = window.localStorage.getItem('landmark') || "";
      setLandmark(localLandmark);
      const localCountry = window.localStorage.getItem('country') || "";
      setCountry(localCountry);
      const localState = window.localStorage.getItem('state') || "";
      setState(localState);
      const pinCode = window.localStorage.getItem('pinCode') || 0;
      setPinCode(pinCode);
    }, []);
  
    useEffect(() => {
      window.localStorage.setItem('addressLineOne', addressLineOne);
      window.localStorage.setItem('addressLineTwo', addressLineTwo);
      window.localStorage.setItem('landmark', landmark);
      window.localStorage.setItem('country', country);
      window.localStorage.setItem('state', state);
      window.localStorage.setItem('pinCode', pinCode);
    }, [addressLineOne, addressLineTwo, landmark, country, state, pinCode]);

    return(

        <div className="container-fluid homepage col-6 offset-3">

        <div className="address-details-box">
        <h2 className="title">Address Details: </h2>

        <label htmlFor="adr-ln-one" className="input-group">
          Enter your address line 1 :{" "}
        </label>
        <input
          type="text"
          id="adr-ln-one"
          className="form-control"
          value={addressLineOne}
          onChange={(e) => setAddressLineOne(e.target.value)}
          placeholder="Address Line 1"
        />
        <br />

        <label htmlFor="adr-ln-two" className="input-group mt-2">
        Enter your address line 2 :{" "}
        </label>
        <input
          type="text"
          id="adr-ln-two"
          className="form-control"
          value={addressLineTwo}
          onChange={(e) => setAddressLineTwo(e.target.value)}
          placeholder="Address Line 2"
        />
        <br />

        <label htmlFor="landmark" className="input-group mt-2">
        Enter your landmark :{" "}
        </label>
        <input
          type="text"
          id="landmark"
          className="form-control"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
          placeholder="Enter your landmark"
        />
        <br />

        <label htmlFor="country" className="input-group mt-2">
        Select your Country :{" "}
        </label>
        <input
          type="text"
          id="country"
          className="form-control"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter your country"
        />
        <br />

        <label htmlFor="state" className="input-group mt-2">
        Select your State :{" "}
        </label>
        <input
          type="text"
          id="state"
          className="form-control"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Enter your state"
        />
        <br />

        <label htmlFor="pin-code" className="input-group mt-2">
        Select your Pin-Code :{" "}
        </label>
        <input
          type="number"
          id="pin-code"
          className="form-control"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          placeholder="Enter your Pincode"
        />
        <br />

        <Link className="button" to={`/step-one`}><h3>Back</h3></Link>
        <Link className="button" to={`/step-three`}><h3>Next</h3></Link>
        </div>

        </div>

    )
}

export default StepTwo;