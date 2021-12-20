import TopBar from './components/top-bar/TopBar';
import Footer from './components/footer/Footer';
import MainContainer from './components/main-container/MainContainer';
import { Context, defaultContext } from './context';

function App() {

    return (
      <div className="App bg-gray-50">
          <Context.Provider value={defaultContext}></Context.Provider>
          <TopBar />
          <MainContainer />
          <Footer />
      </div>
    );
}

export default App;
