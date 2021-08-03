
import './App.css';
import Header from "./components/taskheader/taskheader";
import NewTask from "./components/newtask/newtask";
import ListTask from "./components/listtask/listtask";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App"> 
    <Header/>
    <NewTask/>
    <ListTask/>
    <Footer/>
    </div>
  )
}

export default App