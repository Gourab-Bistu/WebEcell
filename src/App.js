import "./App.css";
import What from "./components/What";
import Footer from "./components/Footer";
import ECellComponent from "./components/ECellComponent";

function App() {
  return (
    <>
      <h1>E-CELL</h1>
      {/* <What /> */}
      <div className="content-container">
        <ECellComponent/>
      </div>
      <hr/>
      {/* <Footer /> */}
      
    </>
  );
}

export default App;
