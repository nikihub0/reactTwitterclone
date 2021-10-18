import "./App.css";
//import 'src/components/Sidebar.css'
import Sidebar from "./components/Sidebar";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Messages from "./components/Messages";
import Nav from "./components/Nav";
import MessageDetails from "./components/MessageDetails";
import UserMessages from "./components/UserMessages";

function App() {
  const [messages, setMessages] = useState([]);
  const msgAPI = "https://minitwitterbackend.herokuapp.com/messages";
  const [user, setUser] = useState([]);
  const meAPI = "https://minitwitterbackend.herokuapp.com/me";



  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  useEffect(() => {
    fetch(msgAPI)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error("Fetching the data failed.");
      })
      .then((data) => {
        // console.log(data);
        setMessages(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [msgAPI]);

  useEffect(() => {
    fetch(meAPI)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error("Fetching the data failed.");
      })
      .then((data) => {
        // console.log(data);
        setUser(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [meAPI]);

  return (
    <>
        <Nav showSidebar={showSidebar} />
        <Sidebar showSidebar={showSidebar} sidebar={sidebar} user={user} />
        
        <Switch>
       
          <Route path="/messages/:messageId" >
          <MessageDetails messages={messages} />
          </Route>
          <Route path="/users/:userId/messages" >
          <UserMessages messages={messages} />
          </Route>
          <Route path="/" >
          <Messages messages={messages} />
          </Route>
        </Switch>
    </>
  );
}

export default App;
