
import './App.css';
import Header from "./components/header/header";
import NewTask from "./components/newtask/newtask";
import ListTask from "./components/listtask/listtask";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App"> 
      <div className="container">
      <div className="center-block"> 
        <Header/>
        <NewTask/>
        <ListTask/>
        <Footer/>
      </div>
      </div>
    </div>
  )
}

export default App