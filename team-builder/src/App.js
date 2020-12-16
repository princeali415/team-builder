
import Form from './Components/form.js' 
import React, { useState } from "react";
import TeammateCard from './Components/TeammateCard.js'
import './App.css';

// shape of the state in order to drive the form



function App() {
  const initialFormValues = {
    name:'',
    email:'',
    role:'',
  }
  // STEP #1: set state for teamlist 
  // set state for inital form values

  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

// implement a form state updater
  const updateForm = (event) => {
    setFormValues({
        ...formValues,
        [event.target.name]: event.target.value
    });
  };

  //implement a submit function 
  const submitForm = (event) => {
    //create newTeamMember Object
    event.preventDefault();
    setTeam([...team, formValues])
    setFormValues(initialFormValues)
  }


  return (
    <div className="App">
      <h1>Team Builder</h1>

    <Form 
    values={formValues}
    update={updateForm}
    submit={submitForm}/>
    
    {team.map((team) => {
      return <TeammateCard values={team} />
    })}
    </div>
  );
}

export default App;
