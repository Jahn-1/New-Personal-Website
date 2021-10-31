import './App.css';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
