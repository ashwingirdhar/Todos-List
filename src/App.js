import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } 
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0)
      sno = 1;
    else
      sno = todos[todos.length - 1].sno + 1;
    // let sno=todos.length===0?1:todos[todos.length-1].sno+1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"  render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            );
          }}>
          </Route>
          <Route exact path='/About'>
            <About/>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

