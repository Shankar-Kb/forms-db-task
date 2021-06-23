import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux'

const StepThree = () => {

    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [branchName, setBranchName] = useState("");
    const [ifscCode, setIfscCode] = useState("");

    const [buttonHidden, setButtonHidden] = useState(true);

    useEffect(() => {
        if(bankName.length > 0 && accountNumber.length> 0 && branchName.length > 0 && ifscCode.length > 0){
          setButtonHidden(false);
        }else{
          setButtonHidden(true);
        }
      }, [bankName, accountNumber, branchName, ifscCode])

    useEffect(() => {
      setBankName(window.localStorage.getItem('bankName'));
      setAccountNumber(window.localStorage.getItem('accountNumber'));
      setBranchName(window.localStorage.getItem('branchName'));
      setIfscCode(window.localStorage.getItem('ifscCode'));

    }, []);

    useEffect(() => {
        window.localStorage.setItem('bankName', bankName);
        window.localStorage.setItem('accountNumber', accountNumber);
        window.localStorage.setItem('branchName', branchName);
        window.localStorage.setItem('ifscCode', ifscCode);
 
      }, [bankName, accountNumber, branchName, ifscCode]);

    const handleSubmit = () => {
        
        const body = {
            UserUserName: window.localStorage.getItem('name'),
            userEmail: window.localStorage.getItem('email'),
            userGender: window.localStorage.getItem('gender'),
            userDateOfBirth: window.localStorage.getItem('dateOfBirth'),

            UserAddressLineOne: window.localStorage.getItem('addressLineOne'),
            useraddressLineTwo: window.localStorage.getItem('addressLineTwo'),
            userLandmark: window.localStorage.getItem('landmark'),
            userCountry: window.localStorage.getItem('country'),
            userState: window.localStorage.getItem('state'),
            userPinCode: window.localStorage.getItem('pinCode'),

            UserBankName: window.localStorage.getItem('bankName'),
            userAccountNumber: window.localStorage.getItem('accountNumber'),
            userBranchName: window.localStorage.getItem('branchName'),
            userIfscCode: window.localStorage.getItem('ifscCode')
        }
        fetch(`${process.env.REACT_APP_SERVER_URL}/submit-form`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            body
          })
        }).then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
       
      }

    return(

        <div className="container-fluid col-6 offset-3">
        
        <div className="bank-details-box">
        <h2 className="title">Bank Details: </h2>

        <label htmlFor="bank-name" className="input-group">
          Enter your bank name :{" "}
        </label>
        <input
          type="text"
          id="bank-name"
          className="form-control"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          placeholder="Bank Name"
        />
        <br />

        <label htmlFor="account-number" className="input-group mt-2">
        Enter your account number :{" "}
        </label>
        <input
          type="number"
          id="account-number"
          className="form-control"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Account Number"
        />
        <br />

        <label htmlFor="branch" className="input-group mt-2">
        Enter your branch :{" "}
        </label>
        <input
          type="text"
          id="branch"
          className="form-control"
          value={branchName}
          onChange={(e) => setBranchName(e.target.value)}
          placeholder="Branch name"
        />
        <br />

        <label htmlFor="ifsc-code" className="input-group mt-2">
        Enter your IFSC Code :{" "}
        </label>
        <input
          type="text"
          id="ifsc-code"
          className="form-control"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
          placeholder="IFSC Code"
        />
        <br />

        <Link className="button" to={`/step-two`}><h3>Back</h3></Link>
        <button type="button" disabled={buttonHidden} className="btn btn-outline-dark mx-auto mt-3" onClick={handleSubmit}>
          Submit
        </button>
        </div>

        </div>

    )
}

export default StepThree;