import TopBar from "./components/top-bar/TopBar";
import Footer from "./components/footer/Footer";
import MainContainer from "./components/main-container/MainContainer";
import { Context, defaultContext } from "./context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../src/components/login/Login";
import Desktop from "../src/components/desktop/Desktop";
import Admin from "../src/components/admin/Admin";

function App() {
  return (
    <div className="MainContainer bg-gray-50 flex flex-col w-full py-24 px-2">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );

  // return (
  //   <div className="App bg-gray-50">
  //       <Context.Provider value={defaultContext}></Context.Provider>
  //       <TopBar />
  //       <MainContainer />
  //       <Footer />
  //   </div>
  // );
}

export default App;
