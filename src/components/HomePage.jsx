import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {


    return(

        <div className="container-fluid homepage col-6 offset-3">

         <Link className="button" to={`/step-one`}><h3>React Form</h3></Link>
        
        </div>

    )
}

export default HomePage;