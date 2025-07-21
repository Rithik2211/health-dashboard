import React from 'react';
import { HealthIndicator as HealthIndicatorType } from '../types';
import { AlertTriangle, Footprints, ChartBarIncreasing, DoorOpen, MoveUpRight } from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ActivityIndicatorsProps {
  indicator: HealthIndicatorType;
}

const weeklyChart = [
  { day: 'Mon', steps: 3490 },
  { day: 'Tue', steps: 6897 },
  { day: 'Wed', steps: 6000, goalMet: true },
  { day: 'Thu', steps: 1245 },
  { day: 'Fri', steps: 3490 },
  { day: 'Sat', steps: 3490 },
  { day: 'Sun', steps: 0 },
];

const CARD_HEIGHT = 'min-h-[340px]'; // adjust as needed for your layout

const ActivityIndicators: React.FC<ActivityIndicatorsProps> = ({ indicator }) => {
  return (
    <div className={`flex flex-col bg-white rounded-xl p-4 shadow-sm border border-gray-200 ${CARD_HEIGHT} justify-between`}
      >
      {/* Daily Steps Card */}
      {indicator.id === 'heart' && (
        <div className='flex flex-col h-full justify-between'>
          <span className="flex items-center gap-1 text-xs font-semibold text-gray-400">
            <Footprints className="w-4 h-4 mr-1 text-gray-400" />
            DAILY STEPS
          </span>
          <div className='flex flex-col items-center justify-center gap-6 bg-gray-100 rounded-xl p-2 m-2 flex-1'>
            <div className="w-32 h-32 mb-2">
              <CircularProgressbar
                value={60}
                text="5678"
                styles={buildStyles({
                  pathColor: '#3B82F6',
                  textColor: '#3B82F6',
                  trailColor: '#DBEAFE',
                  textSize: '16px',
                })}
              />
            </div>
            <div className="inline-flex items-center text-xs text-blue-600"><MoveUpRight  className="w-3 h-3 mr-1 text-blue-600"/> 256 steps  <span className="text-gray-400 pl-1"> vs Yesterday</span></div>
          </div>
          <div className="text-xs text-gray-400 text-center mt-1">Updated 5 mins ago</div>
        </div>
      )}
      {/* WEEKLY Steps Trend */}
      {indicator.id === 'temperature' && (
        <div className='flex flex-col h-full justify-between'>
          <span className="flex items-center gap-1 text-xs font-semibold text-gray-400">
            <ChartBarIncreasing className="w-4 h-4 mr-1 text-gray-400" />
            WEEKLY STEPS TREND
          </span>
          <div className='flex flex-col gap-2 items-center justify-center bg-gray-100 rounded-xl p-2 m-2 flex-1 w-full'>
            <div className='flex flex-col gap-2 w-full px-2'>
              {weeklyChart.map(({ day, steps, goalMet }) => {
                const percentage = Math.min((steps / 7000) * 100, 100);
                return (
                  <div key={day} className="w-full mb-1">
                    <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                      <span>{day}</span>
                      <span className={goalMet ? 'text-green-600 font-bold' : ''}>
                        {steps > 0 ? steps : '-'}
                        {goalMet && ' ✅'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${goalMet ? 'bg-green-500' : 'bg-blue-500'}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-xs text-gray-400 text-center mt-1">Updated 5 mins ago</div>
        </div>
      )}
      {/* Open Space Card */}
      {indicator.id === 'noise' && (
        <div className='flex flex-col h-full justify-between'>
          <span className="flex items-center gap-1 text-xs font-semibold text-gray-400">
            <DoorOpen className="w-4 h-4 mr-1 text-gray-400" />
            OPEN SPACE TIME
          </span>
          <div className='flex flex-col items-center justify-center gap-3 bg-gray-100 rounded-xl p-2 m-2 flex-1'>
            <div className="w-32 h-32 mb-2">
              <CircularProgressbar
                value={40}
                text="23min"
                styles={buildStyles({
                  pathColor: '#3B82F6',
                  textColor: '#3B82F6',
                  trailColor: '#DBEAFE',
                  textSize: '16px',
                })}
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-2 flex items-center mt-2 text-xs text-gray-500 border border-gray-200">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Suggested open-air time: 30 min/daily
            </div>
          </div>
          <div className="text-xs text-gray-400 text-center mt-1">Updated 5 mins ago</div>
        </div>
      )}
    </div>
  );
}; 

export default ActivityIndicators;