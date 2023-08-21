import React from "react";
import "./App.css";

import { Greet } from "./components/propsType/general-props/Greet";
import { Person } from "./components/propsType/general-props/Person";
import { PersonList } from "./components/propsType/general-props/PersonList";
import { nameList, styleCSS } from "./assets/data/data";
import { Status } from "./components/propsType/general-props/Status";
import { Heading } from "./components/propsType/children-props/Heading";
import { Oscar } from "./components/propsType/children-props/Oscar";
import { Button } from "./components/propsType/event-props/Button";
import { Input } from "./components/propsType/event-props/Input";
import { Container } from "./components/propsType/Container";
import LoggedIn from "./components/state-reducer/LoggedIn";
import User from "./components/state-reducer/User";
import Counter from "./components/state-reducer/Counter";

function App() {
  const personName = {
    first: "Aysir",
    last: "Njaimi",
  };

  return (
    <div className="App">
      {/* 
        General props
        <Greet name="Maya" messages={10} isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="loading" />
      */}

      {/* 
        Children props
        <Heading>this is a children props type string</Heading>     
        <Oscar>
         <Heading>The oscar goes to Leonardo Dicaprio</Heading>
        </Oscar>
      */}

      {/* 
        Event Props
        <Button
          handleClick={(event, id) =>
          alert(`event type is ${event.type} with id ${id}`)
          }
        />
        <Input handleChange={(e) => console.log(e?.target?.value)} />
      */}
      {/* 
        styling props
        <Container styles={styleCSS} />
       */}
      {/*  states

      <LoggedIn />
      <User />
       */}
      <Counter />
    </div>
  );
}

export default App;
