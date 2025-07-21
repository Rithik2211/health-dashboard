export interface Alert {
  id: number;
  icon: string;
  count: number;
  title: string;
  description: string;
  button: string;
}

export interface HealthIndicator {
  id: string;
  type: string;
  riskLevel: 'HIGH' | 'MODERATE' | 'CRITICAL';
  alert: string;
  // For heart
  AHR?: number;
  RHR?: number;
  AHRChange?: number;
  RHRChange?: number;
  unit?: string;
  // For temperature and noise
  duration?: string;
} 