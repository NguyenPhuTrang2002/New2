export enum LoginProvider {
  GOOGLE = 'GOOGLE',
  EMAIL = 'EMAIL',
}

export const GOOGLE_LOGIN_REDIRECT_URI = `${location.origin}/google-login`;

export const GOOGLE_CALENDAR_SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/userinfo.email',
];
