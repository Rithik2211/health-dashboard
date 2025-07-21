import { Bell, CloudSunRain, LayoutDashboard, Sailboat } from 'lucide-react';
import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-transparent px-6 py-4 mb-8 relative border-b-2 border-gray-200 mx-4">
      {/* Desktop Header Content */}
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <CloudSunRain className='w-8 h-8 text-gray-500' />
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Good morning,</span>
            <span className="font-semibold text-gray-700">Captain Daniel Alacantra</span>
          </div>
          <div className="ml-8 flex items-center gap-2 text-xs text-gray-400">
            <span className="font-semibold text-gray-700 bg-gray-200 p-2 rounded-lg">DAY 22 AT SEA</span>
            <span className="mx-4">|</span>
            <div className='flex flex-col'>
              <span className="font-semibold text-gray-700">MV Northern Star</span>
              <span>IMO : 928502875</span>
            </div>
          </div>
          <div className='flex flex-row bg-blue-100 px-3 py-2 rounded-lg'>
            <Sailboat className='w-5 h-4 text-blue-700'/>
            <span className="ml-4 text-blue-700 text-xs font-bold">SAILING</span>
          </div>
          <div className="text-xs text-gray-400">
            <span>12/05/2025</span>
            <span className="mx-1">|</span>
            <span>12 : 24 : 45 UTC</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative">
            <span className="inline-block w-8 h-8 bg-gray-200 rounded-xl flex items-center justify-center">
              <Bell className='w-4 h-4 text-gray-700' />
            </span>
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">5</span>
          </button>
        </div>
      </div>
      {/* Mobile Hamburger */}
      <div className="flex md:hidden items-center justify-end w-full">
        <button
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open header menu"
        >
          <LayoutDashboard className='w-8 h-8 text-pink-500' />
        </button>
        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-40 flex justify-end md:hidden">
            <div className="bg-white w-80 max-w-full h-full shadow-xl p-6 flex flex-col">
              <button
                className="self-end mb-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                onClick={() => setMenuOpen(false)}
                aria-label="Close header menu"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M6 6l12 12M6 18L18 6" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              {/* All header content in the drawer */}
              <div className="flex flex-col gap-6">
                <CloudSunRain className='w-8 h-8 text-gray-500' />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Good morning,</span>
                  <span className="font-semibold text-gray-700">Captain Daniel Alacantra</span>
                </div>
                <div className="flex flex-col gap-1 text-xs text-gray-400">
                  <span><span className="font-semibold text-gray-700">DAY 22 AT SEA</span></span>
                  <span><span className="font-semibold text-gray-700">MV Northern Star</span></span>
                  <span>IMO : 928502875</span>
                  <span className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold w-max">SAILING</span>
                </div>
                <div className="flex flex-col gap-1 text-xs text-gray-400">
                  <span>12/05/2025</span>
                  <span>12 : 24 : 45 UTC</span>
                </div>
                <button className="relative w-max">
                  <span className="inline-block w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 2a6 6 0 0 0-6 6v2.586l-.707.707A1 1 0 0 0 4 14h12a1 1 0 0 0 .707-1.707L16 10.586V8a6 6 0 0 0-6-6Zm0 16a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2Z" fill="#EC4899"/></svg>
                  </span>
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">5</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}; 