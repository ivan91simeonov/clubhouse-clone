import './App.css';
import Welcome from './pages/welcome/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation/PhoneConfirmation';

function App() {
  return (
    <Router>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
        </Routes>
      </PlanLayout>
    </Router>
  );
}

export default App;
