import './app.css';
import Sidebar from './componets/sidebar'
import Proyectos from './componets/creator/Mantenimiento';
import Aspect from './componets/icons-navbar/Aspect';
import Lang from './componets/icons-navbar/Lang';
import Messages from './componets/icons-navbar/Messages';
import Notify from './componets/icons-navbar/Notify';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SelectSocial from './componets/creator/base-creator/Selectsocial';
import GuideCreator from './componets/creator/base-creator/GuideCreator';
import FlowshopLogo from './componets/logo';
import FinishCreator from './componets/creator/base-creator/FinishCreator';
function App() {
  return (
    <Router>
      <section className='container-creator'>

      <header className='header'>
      <div className='header-bar'>
        <div><FlowshopLogo/></div>


      <div className='bar-details'>
          <div className='options'>
              <Aspect/>
              <Lang/>
              <Messages/>
              <Notify/>
          </div>

          <div className="profile">
              <div className="profile-image"></div>
              <span className="username">Sioswel Medina</span>
          </div>
          </div>
      </div>
      </header>

          <Sidebar />


        <div className='main-section'>
        
        <Routes>
        <Route path="/dashboard" element={<Proyectos />} />
        <Route path="/panelc" element={<Proyectos />} />
        <Route path="/projects" element={<Proyectos />} />
        <Route path="/creator-content" element={<SelectSocial/>} />
        
        <Route path="/creator-content/GuideCreator" element={<GuideCreator/>} />
        <Route path="/creator-content/FinishCreator" element={<FinishCreator/>} />
        <Route path="/campaign" element={<Proyectos />} />
        <Route path="/networks" element={<Proyectos />} />
        <Route path="/payments" element={<Proyectos />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />        
        </Routes>
        </div>
      </section>
    </Router>
  );
}


export default App;
