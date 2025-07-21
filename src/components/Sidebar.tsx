import React from 'react';
import { AlarmClock, BatteryMedium, LayoutDashboard, ListChecks, PersonStanding, Settings, User, Watch } from 'lucide-react';

const navItems = [
  { label: 'Overview', icon: <LayoutDashboard className='w-5 h-5 text-gray-500' />, active: true },
  { label: 'Health', icon: <PersonStanding className='w-5 h-5 text-gray-500' /> },
  { label: 'Work Rest Hours', icon: <AlarmClock className='w-5 h-5 text-gray-500' /> },
  { label: 'Non-Conformities', icon: <ListChecks className='w-5 h-5 text-gray-500' />, badge: 4 },
];

export const Sidebar: React.FC = () => (
  <aside className="w-64 bg-gray-100 h-full rounded-xl flex flex-col p-4 mr-6">
    <div className="flex items-center mb-8">
      <span className="text-2xl font-bold text-pink-600 tracking-tight">SOL-X</span>
    </div>
    <div className="bg-gray-200 rounded-lg p-2 flex justify-between items-center mb-4">
      <Watch className='w-5 h-5 text-gray-500' />
      <div>
        <div className="text-xs text-black font-bold">DEVICE CONNECTED</div>
        <div className="text-xs text-gray-500">02/04/2025, 13:12:45</div>
      </div>
      <div className='flex items-center flex-col bg-green-600 rounded-lg p-2'>
        <BatteryMedium className='w-5 h-5 text-white' />
        <span className="ml-auto text-white font-bold text-xs">85%</span>
      </div>
    </div>
    <div className="border-b border-gray-300 mb-4" />
    <nav className="flex-1">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href="#"
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition text-gray-700 hover:bg-gray-100`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.label}
              {item.badge && (
                <span className="ml-auto bg-pink-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">{item.badge}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <div className="mt-auto pt-4">
      <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition text-gray-700 hover:bg-gray-100">
      <span className="mr-3 text-lg">
        <User className='w-5 h-5 text-gray-500' />
      </span>
        Profile
        </a>
      <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition text-gray-700 hover:bg-gray-100">
        <Settings className='w-5 h-5 text-gray-500' />
        Settings
        </a>
    </div>
  </aside>
); 