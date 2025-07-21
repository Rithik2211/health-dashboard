import React from 'react';
import { Alert } from '../types';
import { AlarmClock, ChevronDown } from 'lucide-react';

interface AlertCardProps extends Alert {
  onButtonClick?: () => void;
}

const iconMap: Record<string, JSX.Element> = {
  device: (
    <span className="inline-block bg-pink-100 rounded-lg p-2 mr-3">
      {/* Device icon SVG */}
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2" fill="#EC4899"/><rect x="9" y="18" width="6" height="2" rx="1" fill="#fff"/></svg>
    </span>
  ),
  timer:  <span className="inline-block bg-pink-100 rounded-lg p-2 mr-3">
    <AlarmClock className='w-5 h-5 text-pink-500' />
  </span>,
};

export const AlertCard: React.FC<AlertCardProps> = ({ icon, count, title, description, button, onButtonClick }) => (
  <div className="flex items-center bg-white border-2 border-pink-200 rounded-xl p-4 mx-4 mb-4">
    {iconMap[icon]}
    <div className="flex-1">
      <div className="flex items-center text-lg font-semibold">
        <span className="text-pink-600 text-2xl font-bold mr-2">{count}</span>
        <span>{title}</span>
      </div>
      <div className="text-gray-500 text-sm mt-1">{description}</div>
    </div>
    <button
      className="flex flex-row ml-4 px-4 py-2 bg-white hover:bg-gray-100 text-black rounded-lg text-sm font-medium border border-gray-200 transition"
      onClick={onButtonClick}
    >
      {button}
      <ChevronDown className='w-5 h-5 text-black' />
    </button>
  </div>
); 