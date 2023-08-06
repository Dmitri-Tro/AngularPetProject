export interface CommonResponseType<T = {}> {
  data: T;
  resultCode: number;
  messages: string[];
}

export interface LoginRequestData {
  email: string;
  password: string;
}

export interface MeResponse {
  email: string;
  id: number;
  login: string;
}

// Notification

export type SeverityType = 'success' | 'error' | 'info';

export interface Notify {
  message: string;
  severity: SeverityType;
}
