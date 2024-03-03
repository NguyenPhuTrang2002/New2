import { DEFAULT_LANGUAGE, SupportLanguage } from '../constants';
import { storage } from './localStorage';

const BUFFER_TIME = 60 * 1000; // 60s

export const enum AUTH_SERVICE_KEY {
  ACCESS_TOKEN = 'ACCESS_TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  USER = 'USER',
  ROLE = 'ROLE',
  LANGUAGE = 'LANGUAGE',
  ACCESS_TOKEN_EXPIRED_AT = 'ACCESS_TOKEN_EXPIRED_AT',
  REFRESH_TOKEN_EXPIRED_AT = 'REFRESH_TOKEN_EXPIRED_AT',
}
class LocalStorageAuthService {
  // ACCESS_TOKEN
  setAccessToken(token: string): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN, token);
  }
  getAccessToken(): string {
    return storage.getLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN);
  }
  resetAccessToken(): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN, '');
  }

  // REFRESH_TOKEN
  setRefreshToken(token: string): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN, token);
  }
  getRefreshToken(): string {
    return storage.getLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN);
  }
  resetRefreshToken(): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN, '');
  }

  // ACCESS_TOKEN_EXPIRED_AT
  getAccessTokenExpiredAt(): number {
    return +storage.getLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT);
  }
  // setAccessTokenExpiredAt(expiredIn: string): void {
  //   storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT, expiredIn);
  // }
  setAccessTokenExpiredAt(expiredIn: number): void {
    const expireIn = new Date().getTime() + expiredIn * 1000;
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT, String(expireIn));
  }
  resetAccessTokenExpiredAt(): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT, '');
  }

  // LANGUAGE
  setLanguage(value: SupportLanguage): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.LANGUAGE, value);
  }
  getLanguage(): SupportLanguage {
    return (storage.getLocalStorage(AUTH_SERVICE_KEY.LANGUAGE) ||
      DEFAULT_LANGUAGE) as SupportLanguage;
  }
  getHeader() {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
      'Accept-Language': this.getLanguage() || DEFAULT_LANGUAGE,
    };
  }

  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
    };
  }

  getHeadersNoAuthorization() {
    return {
      'Accept-Language': this.getLanguage() || DEFAULT_LANGUAGE,
    };
  }

  resetAll(): void {
    this.resetAccessToken();
    this.resetAccessTokenExpiredAt();
    this.resetRefreshToken();
  }
}

export const localStorageAuthService = new LocalStorageAuthService();
export default localStorageAuthService;
