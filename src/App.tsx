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
import UserS from "./components/state-reducer/UserS"; // user state
import Counter from "./components/state-reducer/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import UserContextProvider from "./components/context/UserContext";
import { UserC } from "./components/context/UserC"; // user context
import DomRef from "./components/refs/DomRef";
import MutableRef from "./components/refs/MutableRef";
import { CounterClass } from "./components/class/CounterClass";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

function App() {
  const personName = {
    first: "Aysir",
    last: "Njaimi",
  };

  return (
    <div className="App">
      {/************** General props **************/}
      <Greet name="Maya" messages={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />

      <br />
      <br />
      <br />
      {/*************  Children props*************/}
      <Heading>this is a children props type string</Heading>
      <Oscar>
        <Heading>The oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <br />
      <br />
      <br />
      {/*************** Event Props***************/}
      <Button
        handleClick={(event, id) =>
          alert(`event type is ${event.type} with id ${id}`)
        }
      />
      <Input handleChange={(e) => console.log(e?.target?.value)} />
      <br />
      <br />
      <br />
      {/**************  styling props**************/}
      <Container styles={styleCSS} />
      <br />
      <br />
      <br />
      {/******************  states******************/}
      <LoggedIn />
      <UserS />
      <Counter />
      <br />
      <br />
      <br />
      {/***************  react context***************/}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <UserC />
      </UserContextProvider>
      <br />
      <br />
      <br />
      {/****************  useRef react****************/}
      <DomRef />
      <MutableRef />
      <br />
      <br />
      <br />
      {/**************class component **************/}
      <CounterClass message="The count value is 5" />
      <br />
      <br />
      <br />
      {/********** a component as a props **********/}
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
