import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
class App extends React.Component{
render(){
  return(
    <div>
    {/* <h1>Title </h1>*/}
    <Header/>
    <main/>
    <Footer/>
    </div>
  )
}


}


export default App;
