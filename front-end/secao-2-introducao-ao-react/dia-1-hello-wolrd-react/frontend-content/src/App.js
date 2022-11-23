import './App.css';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';

function App() {
  return (
    <>
      <Header />
      <section id='container'>
        <Content />
      </section>
      <Footer />
    </>
  );
}

export default App;
