import React, { useEffect, useState } from 'react';
import { AlertCard } from './components/AlertCard';
import { HealthIndicator } from './components/HealthIndicator';
import { fetchDashboardData } from './utils/fetchDashboardData';
import { Alert, HealthIndicator as HealthIndicatorType } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ChevronLeft, ChevronRight, Menu, PersonStanding } from 'lucide-react';
import ActivityIndicators from './components/ActivityIndicators';

const App: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [healthIndicators, setHealthIndicators] = useState<HealthIndicatorType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchDashboardData()
      .then((data) => {
        setAlerts(data.alerts);
        setHealthIndicators(data.healthIndicators);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="flex h-screen">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 bg-white p-2 rounded-lg shadow border border-gray-200"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className='w-8 h-8 text-pink-500' />
      </button>
      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Sidebar drawer */}
      <div
        className={`
          fixed top-2 left-2 h-screen z-40 w-64 transition-transform rounded-lg border-gray-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} p-2
          md:translate-x-0 md:static md:block
        `}
      >
        <Sidebar />
      </div>
      {/* Main content: margin-left for sidebar only on md+ */}
      <main className="flex-1 ml-34 overflow-y-auto h-screen bg-gray-50">
        <Header />
        <div className="mx-auto w-full sm:px-4 md:px-0">
          {/* Top Alert Cards */}
          <div className="grid grid-rows-1 gap-4 mx-4 mb-8">
            {alerts.map((alert) => (
              <AlertCard key={alert.id} {...alert} />
            ))}
          </div>
          <div className='flex flex-row justify-between items-center text-center mx-8'>
            <h2 className="text-lg font-bold mb-4">Overview</h2>
            <div className='flex flex-row gap-6 bg-gray-100 rounded-lg px-2 py-1'>
              <ChevronLeft className='w-5 h-5 text-gray-400 bg-gray-200 rounded-full'/>
              <span className="font-semibold text-gray-400 text-sm">Today</span>
              <ChevronRight className='w-5 h-5 text-gray-400'/>
            </div>
          </div>
          {/* Health Indicators */}
          <div className="bg-gray-100 rounded-xl p-4 sm:p-6 m-8">
            {/* Health Section */}
            <div className='flex flex-row items-center justify-between text-center py-2'>
              <h2 className="flex items-center text-lg font-bold mb-4">
                <PersonStanding className="w-5 h-5 text-black mr-2" />
                Health Indicators
              </h2>
              <div className='bg-gray-200 rounded-xl px-2'>
                <span className="font-semibold text-gray-500 text-sm">BETA</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {healthIndicators.map((indicator) => (
                <HealthIndicator key={indicator.id} indicator={indicator} />
              ))}
            </div>
            {/* Activity Indicators */}
            <h2 className="flex items-center text-lg font-bold my-4">
              <PersonStanding className="w-5 h-5 text-black mr-2" />
              Activity Indicators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {healthIndicators.map((indicator) => (
                <ActivityIndicators key={indicator.id} indicator={indicator} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
