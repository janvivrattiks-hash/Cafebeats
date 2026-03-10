import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppProvider';
import AppRoutes from './routes/AppRoutes';
import PageWrapper from './components/layout/PageWrapper';

function App() {
  return (
    <AppProvider>
      <Router>
        <PageWrapper>
          <AppRoutes />
        </PageWrapper>
      </Router>
    </AppProvider>
  );
}

export default App;
