import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FilterBar from '../components/FilterBar';
import DashboardContent from '../components/DashboardContent';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="container mx-auto px-4 py-6">
          <FilterBar />
          <DashboardContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;