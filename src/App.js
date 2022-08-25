import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app flex col">
      <Header />
      <main className="app-main flex">
        <Hero />
      </main>
    </div>
  );
}

export default App;
