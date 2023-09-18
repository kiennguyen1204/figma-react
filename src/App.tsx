import HomePage from './pages/Homepage/Homepage';
import RouterViews from './router';
import { Navbar } from 'layouts/header/navbar';
import { Footer } from './layouts/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterViews
        header={<Navbar />}
        footer={<Footer />}
      > 
      <HomePage/>
      </RouterViews>
    </div>
  );
};

export default App;