import React from 'react';
import { HealthIndicator as HealthIndicatorType } from '../types';
import { Heart, Thermometer, Waves, Info, AlertTriangle, OctagonAlert, HelpCircle, MoveUpRight } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface HealthIndicatorProps {
  indicator: HealthIndicatorType;
}

// chart data for heart
const heartChartData = [
  { time: '06:00', value: 80 },
  { time: '12:00', value: 120 },
  { time: '18:00', value: 200 },
  { time: '23:00', value: 90 },
];

export const HealthIndicator: React.FC<HealthIndicatorProps> = ({ indicator }) => {
  const isCritical = indicator.riskLevel === 'CRITICAL';
  return (
    <div className={`flex flex-col bg-white rounded-xl p-4 shadow-sm border border-gray-200`}
      >
      {/* Heart Card */}
      {indicator.id === 'heart' && (
        <div className='flex flex-col h-full justify-between'>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1 text-xs font-semibold text-gray-400">
              <Heart className="w-4 h-4 mr-1 text-gray-400" />
              {indicator.type}
            </span>
            <span className={`text-xs font-bold uppercase text-pink-600 bg-pink-200 px-2 py-1 rounded-lg`}>{indicator.riskLevel}</span>
          </div>
          {/* Card Heart Risk */}
          <div className='flex flex-col items-center justify-center bg-gray-100 rounded-xl p-2 m-2'>
            <div className="inline-flex items-center gap-2 font-semibold text-base mb-1">{indicator.alert} <HelpCircle className='w-4 h-4 text-pink-500'/></div>
            <div className='flex flex-row items-center justify-between w-full px-4'>
              <div className='flex flex-col'>
                <div className="text-xs text-gray-400">AHR </div>
                <div className="text-xl font-bold text-black flex items-center justify-center">
                  <Heart className="w-6 h-6 mr-1 text-pink-500" />
                  {indicator.AHR} bpm
                </div>
                <span className="inline-flex items-center text-pink-600"><MoveUpRight  className="w-3 h-3 mr-1 text-pink-600"/> {indicator.AHRChange} bpm</span>
              </div>
              <div className="h-12 border-l border-gray-300 mx-4" />
              <div className='flex flex-col'>
                <div className="text-xs text-gray-400">RHR </div>
                <div className="text-2xl font-bold text-pink-600 flex items-center justify-center">
                <span className="text-base font-normal text-gray-500">45 {indicator.unit}</span>
                </div>
                <span className="inline-flex items-center text-pink-600"><MoveUpRight  className="w-3 h-3 mr-1 text-pink-600"/> {indicator.RHRChange} bpm</span>
              </div>
            </div>
            <div className="w-full h-20 mt-2">  
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={heartChartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <Line type="monotone" dataKey="value" stroke="#EC4899" strokeWidth={2} dot={false} />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#aaa' }} />
                  <YAxis hide />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 flex items-center mt-2 text-xs text-gray-500 border border-gray-200">
              <Info className="w-4 h-4 mr-2" />
              Rest 2+ hours and avoid intense tasks.
            </div>
          </div>
          <div className="text-xs text-gray-400 text-center mt-1">Updated 5 mins ago</div>
        </div>
      )}
      {/* Temperature Card */}
      {indicator.id === 'temperature' && (
        <div className='flex flex-col h-full justify-between'>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1 text-xs font-semibold text-gray-400">
              <Thermometer className="w-4 h-4 mr-1 text-gray-400" />
              {indicator.type}
            </span>
            <span className={`flex flex-row gap-3 text-xs font-bold uppercase text-yellow-600 bg-yellow-200 px-2 py-1 rounded-lg `}>{indicator.riskLevel}<HelpCircle className='w-4 h-4 text-yellow-500'/></span>
          </div>
          {/* Card Temperature */}
          <div className='flex flex-col gap-3 items-center justify-center bg-yellow-100 rounded-xl p-2 m-2'>
            <div className="font-semibold text-base mb-1">{indicator.alert}</div>
            <div className="w-40 h-40 mb-2">
              <CircularProgressbar
                value={75}
                text={indicator.duration}
                styles={buildStyles({
                  pathColor: '#F59E42',
                  textColor: '#F59E42',
                  trailColor: '#FFF7E6',
                  textSize: '16px',
                })}
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-2 flex items-center mt-2 text-xs text-gray-500 border border-gray-200">
              <Info className="w-4 h-4 mr-2" />
              Take a 15-minute break in shade. Drink 500ml water
            </div>
          </div>
          <div className="text-xs text-gray-400 text-center mt-1">Updated 5 mins ago</div>
        </div>
      )}
      {/* Noise Card */}
      {indicator.id === 'noise' && (
        <div className='flex flex-col h-full justify-between'>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1 text-xs font-semibold text-gray-400">
              <Waves className="w-4 h-4 mr-1 text-gray-400" />
              {indicator.type}
            </span>
            <span className={`flex flex-row gap-2 text-xs font-bold uppercase text-white bg-pink-600 px-2 py-1 rounded-lg `}><OctagonAlert className='w-4 h-4 text-white' />{indicator.riskLevel}</span>
          </div>
          {/* Card Noise */}
          <div className='flex flex-col items-center justify-center gap-3 bg-pink-100 rounded-xl p-2 m-2'>
            <div className="inline-flex items-center gap-2 font-semibold text-base mb-1">{indicator.alert}<HelpCircle className='w-4 h-4 text-pink-500'/></div>
            <div className={`w-40 h-40 flex items-center justify-center rounded-full border-4 border-dashed ${isCritical ? 'border-pink-600 animate-pulse' : 'border-gray-200'} mb-2`}>
              <span className="text-2xl font-bold text-red-600">{indicator.duration}</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 flex items-center mt-2 text-xs text-gray-500 border border-gray-200">
              <AlertTriangle className="w-5 h-5 mr-2 text-pink-500" />
              Rotate off loud zones. Enforce quiet breaks. Check PPE fit.
            </div>
          </div>
          <div className="text-xs text-gray-400 text-center mt-1">Updated 5 mins ago</div>
        </div>
      )}
    </div>
  );
}; 