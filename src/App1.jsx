import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Values from './components/Values/Values';
import Contacts from './components/Contacts/Contacts';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <div className='white-gradient' />
      <Header />
      <Hero />
      <main>
        <Routes>
          <Route path='/companies' element={<Companies />} />
          <Route path='/residencies' element={<Residencies />} />
          <Route path='/values' element={<Values />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/getstarted' element={<GetStarted />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );

  // return (

  //   <div className='App'>
  //     <div>
  //       <div className='white-gradient' />
  //       <Header />
  //       <Hero />
  //     </div>
  //     <Companies />
  //     <Residencies />
  //     <Values />
  //     <Contacts />
  //     <GetStarted />
  //     <Footer />
  //   </div>
  // );
}

export default App;
