import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { useRoutes } from 'react-router-dom';
import routes from './routes'


function App() {

  const router = useRoutes (routes)

  return(
    <>
      { router }
    </>
  )
}

export default App;
