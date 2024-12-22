import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeProvider from './theme/ThemeProvider';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ReviewsPage from './components/ReviewsPage';
import Settings from './pages/Settings';
import IntegrationsPage from './components/IntegrationsPage';
import AnalyticsPage from './components/AnalyticsPage';
import ReviewLinkPage from './components/ReviewLinkPage';
import Locations from './components/LocationsPage';
import NotificationsPage from './components/NotificationsPage';
import GetReviewsPage from './components/GetReviewsPage';
import BusinessUsers from './pages/BusinessUsers';
import SocialSharing from './pages/SocialSharing';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ReviewsPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="get-reviews" element={<GetReviewsPage />} />
              <Route path="review-link" element={<ReviewLinkPage />} />
              <Route path="analytics" element={<AnalyticsPage />} />
              <Route path="integrations" element={<IntegrationsPage />} />
              <Route path="settings" element={<Settings />} />
              <Route path="locations" element={<Locations />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="business-users" element={<BusinessUsers />} />
              <Route path="social-sharing" element={<SocialSharing />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
