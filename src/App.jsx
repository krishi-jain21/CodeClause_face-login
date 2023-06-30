import './App.css';
import { useEffect, useState } from 'react';
import faceIO from '@faceio/fiojs';

function App() {
  
  let faceio;
  useEffect(() => {
    faceio = new faceIO("fioaf7d8");
}, []);


const handleSignIn = async () => {
  try {
    let response = await faceio.enroll({
      locale: "auto",
      payload: {
        email: "example@gmail.com",
        pin: "12345",
      },
    });

    console.log(` Unique Facial ID: ${response.facialId}
    Enrollment Date: ${response.timestamp}
    Gender: ${response.details.gender}
    Age Approximation: ${response.details.age}`);
  } catch (error) {
    console.log(error);
  }
};

const handleLogIn = async () => {
  try {
    let response = await faceio.authenticate({
      locale: "auto",
    });

    console.log(` Unique Facial ID: ${response.facialId}
        PayLoad: ${response.payload}
        `);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="App">
      <h1>Face Login Application</h1>
      <p>Welcome to face login application. If you are a new user click on the sign-in button and if already registered click on log-in button.</p>
      <button onClick={handleSignIn}>Sign-in</button>
      <button onClick={handleLogIn}>Log-in</button>
    </div>
  );
}

export default App;
