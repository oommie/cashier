
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers"; // จริงๆต้องเขียนว่า ./reducers/index 
import reduxThunk from "redux-thunk";

const store = createStore(reducers,{},applyMiddleware(reduxThunk));




//import {Provider} from "react-scripts"
/*
function welcome(){
  return "Welcom K. "
}
let oom = "Oommie";
let user = {username:"Chanita",email:"oomka@mail.com"}
const ele = <h1>Hello {welcome()} {oom + user.username + ' : ' + user.email} </h1>
//ReactDOM.render(ele,document.getElementById('oommieDiv'));

function Welcome(){
  return <h1>Welcome to react world</h1> //jsx
}*/
//ReactDOM.render(<Welcome />,document.getElementById('oommieDiv'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('oommieDiv')

);
