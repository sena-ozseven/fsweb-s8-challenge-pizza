import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiparisOlustur from './siparis-olustur/Siparis-Olustur';
import Anasayfa from './anasayfa/Anasayfa';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Submitted from './siparis-olustur/submitted';



function App() { 

  return (
    <Switch>
      <Route path='/' exact>
        <Anasayfa />
      </Route>
      <Route path='/siparisform'>
        <SiparisOlustur />
      </Route>
      <Route path='/confirmation'>
        <Submitted />
      </Route>
    </Switch>
  );
}

export default App;
