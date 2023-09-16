import RouterViews from './router';
import { Navbar } from 'layouts/header/navbar';
import { Footer } from './pattern/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterViews>
        <Navbar />
        <Footer />
      </RouterViews>
    </div>
  );
};

export default App;
