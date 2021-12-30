import TopBar from "./components/top-bar/TopBar";
import Footer from "./components/footer/Footer";
import { Context, defaultContext } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./components/main-container/MainContainer";
import { forwardRef, useRef, useImperativeHandle } from "react";

function App() {
  const childRef = useRef();
  // const childRef = useRef<HTMLInputElement>();

  // const refreshTopBar = () => {
  //   // refTopBar?.current?.refresh();
  //   console.log("Ok");
  // };

  const refreshTopBar = () => {
    if (childRef?.current != null) {
      // @ts-ignore
      childRef.current.refresh();
    }
    console.log("refresh top bar APP");
  };

  return (
    <Router>
      <div className="App bg-gray-50">
        <Context.Provider value={defaultContext}></Context.Provider>
        <TopBar ref={childRef} />
        <MainContainer refreshTopBar={refreshTopBar} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
