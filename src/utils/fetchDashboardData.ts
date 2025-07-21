import { Alert, HealthIndicator } from '../types';

export interface DashboardData {
  alerts: Alert[];
  healthIndicators: HealthIndicator[];
}

export async function fetchDashboardData(): Promise<DashboardData> {
  const response = await fetch('/data.json');
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data');
  }
  return response.json();
} 