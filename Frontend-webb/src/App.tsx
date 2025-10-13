import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store';
import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Root path (/) redirectar automatiskt till /dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Dashboard route - din sida */}
          <Route path="/dashboard" element={<DashboardPage />} />
          
          {/* Din kollega lägger till /login route här senare */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;