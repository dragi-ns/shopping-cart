import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app flex col">
      <Header />
      <main className="app-main flex">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
