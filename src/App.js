import './App.css';
import Header from './Pages/Shared/Header/Header';

import { RouterProvider} from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';

function App() {

  return (
    <div className="App">
        <Header></Header>
        <RouterProvider router={routes} ></RouterProvider>
    </div>
  );
}

export default App;
