import "./App.css";
import Registration from "./component/Registration/Registration";
// import { Switch, Route, Redirect } from "react-router-dom";
import AddMovie from "./component/AddMovie.js/AddMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="addmovie" element={<AddMovie />} />
      </Routes>
    </div>
  );
}

export default App;
