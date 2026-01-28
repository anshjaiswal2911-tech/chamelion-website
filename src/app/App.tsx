import { useState } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { LandingPage } from '@/app/pages/LandingPage';
import { DashboardPage } from '@/app/pages/DashboardPage';
import { AnalyticsPage } from '@/app/pages/AnalyticsPage';

type Page = 'landing' | 'dashboard' | 'analytics';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'dashboard':
        return <DashboardPage />;
      case 'analytics':
        return <AnalyticsPage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}