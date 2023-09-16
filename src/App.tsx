import { Navbar } from 'layouts/header/navbar';
import RouterViews from './router';

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterViews>
        <Navbar />
      </RouterViews>
    </div>
  );
};

export default App;
