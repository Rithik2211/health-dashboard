import React from 'react';
import { Alert } from '../types';
import { AlarmClock, ChevronDown } from 'lucide-react';
import '../deviceIconAnimation.css';

interface AlertCardProps extends Alert {
  onButtonClick?: () => void;
}

const iconMap: Record<string, JSX.Element> = {
  device: (
    <span className="relative inline-block rounded-lg p-2 mr-3 bg-pink-500">
    {/* First outer ring */}
    <span className="absolute inset-0 rounded-lg ring-4 ring-pink-300 ring-offset-[2px] animate-inner-ring"></span>
    {/* Second outer ring with a larger offset */}
    <span className="absolute inset-0 rounded-lg ring ring-pink-200 ring-offset-[5px] animate-outer-ring"></span>
    {/* Icon */}
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className='relative z-10 animate-zoom-in-out'>
      <rect x="6" y="2" width="12" height="20" rx="2" fill="#fff"/>
      <rect x="9" y="18" width="6" height="2" rx="1" fill="#EC4899"/>
    </svg>
  </span>
  ),
  timer: <button className="relative mr-4">
  <span className="inline-block w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center">
    <AlarmClock className='w-6 h-6 text-pink-500' />
  </span>
  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center font-bold">
    <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
      <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </span>
</button>
};

export const AlertCard: React.FC<AlertCardProps> = ({ icon, count, title, description, button, onButtonClick }) => (
  <div className={`flex items-center rounded-xl p-4 mx-4 mb-4 ${icon === 'device' ? 'border-2 border-pink-500 bg-white' : 'bg-gray-100'}`}>
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