import React, {useState} from 'react';
import ReactDOM from "react-dom";

import AddForm from "./components/AddForm";
import NewMember from "./components/NewMember";
import './App.css';
import data from "./data";

function App() {
const [members, setMembers] = useState(data);
const addNewMember = member => {
  setMembers([...members, member]);
};


  return (
    <div className="App">
      <header className="App-header">
        <h1>Awesome Team Members</h1>
      </header>

      <AddForm addNewMember={addNewMember} />

      <NewMember memberList={members} />
    </div>
  );
}

export default App;
