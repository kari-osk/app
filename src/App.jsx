import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import Post from './components/Post';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Post />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
