import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    <div className="app flex col">
      <Header />
      <CartSidebar />
      <main className="app-main flex">
        {/* <Hero /> */}
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
