import TopBar from './components/top-bar/TopBar';
import Footer from './components/footer/Footer';
import MainContainer from './components/main-container/MainContainer';

function App() {
    return (
      <div className="App bg-gray-50">
          <TopBar />
          <MainContainer />
          <Footer />
      </div>
    );
}

export default App;
