import localStorageAuthService from '../../common/storages/authStorage';
import { authApi } from '../services/auth.api';
import type { IBodyLogin } from '../interfaces';
// import dayjs from '../../plugins/dayjs';
// import { logout } from '@/plugins/axios';

export const useAuthStore = () => {
  //   profile name, email, etc

  //   async function logoutAction() {
  //     await authApi.logout();
  //     logout();
  //   }

  async function login(body: IBodyLogin) {
    const res = await authApi.login(body);
    console.log(res);

    if (res.success) {
      localStorageAuthService.setAccessToken(res.data?.access_Token);
      localStorageAuthService.setAccessTokenExpiredAt(res.data?.time_Token)
      localStorageAuthService.setRefreshToken(res.data?.refresh_Token);
    }
    return res;
  }

  //   const isAuthenticated = computed(() => {
  //     const token = localStorageAuthService.getAccessToken();
  //     const expiredAt = localStorageAuthService.getAccessTokenExpiredAt();
  //     return Boolean(token && expiredAt && !dayjs(dayjs(expiredAt)).isBefore());
  //   });
  //   const hasToken = computed(() => {
  //     return !!localStorageAuthService.getAccessToken();
  //   });
  return {
    login,
    // logoutAction,
    // hasToken,
    // isAuthenticated,
  };
};
