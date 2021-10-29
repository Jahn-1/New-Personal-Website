import './App.css';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <About />
      <Projects />
    </div>
  );
}

export default App;
