import RouterViews from './router';
import { Navbar } from 'layouts/header/navbar';
import { Footer } from './layouts/footer';
import 'rsuite/dist/rsuite.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterViews
        header={<Navbar />}
        footer={<Footer />}
      > 
      </RouterViews>
    </div>
  );
};

export default App;