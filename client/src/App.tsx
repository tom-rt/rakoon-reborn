import TopBar from "./components/top-bar/TopBar";
import Footer from "./components/footer/Footer";
import MainContainer from "./components/main-container/MainContainer";
import { Context, defaultContext } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App bg-gray-50">
        <Context.Provider value={defaultContext}></Context.Provider>
        <TopBar />
        <MainContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
