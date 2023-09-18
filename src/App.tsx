import RouterViews from './router';
import { Navbar } from 'layouts/header/navbar';
import { Footer } from './layouts/footer';
import HomePage from './pages/Homepage/Homepage';



const App: React.FC = () => {
  return (
    <div className="App">

      <RouterViews>
        <Navbar />
        <HomePage/>
        <Footer />
      </RouterViews>
    </div>
  );
};

export default App;
