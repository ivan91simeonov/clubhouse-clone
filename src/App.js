import './App.css';
import Welcome from './pages/welcome/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm/CodeConfirm';
import AllowNotification from './pages/Notification/AllowNotification';

function App() {
  return (
    <Router>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path="/code_confirm" element={<CodeConfirm />} />
          <Route path="/allow_notification" element={<AllowNotification />} />
        </Routes>
      </PlanLayout>
    </Router>
  );
}

export default App;
