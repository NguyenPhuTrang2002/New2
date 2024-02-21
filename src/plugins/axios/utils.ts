import { HttpStatus, PageName } from '../../features/common/constants';
import localStorageAuthService from '../../features/common/storages/authStorage';
import axios from 'axios';

export const logout = (redirectToLogin = true) => {
  // localStorageAuthService.resetAll();
  // const currentPage = router.currentRoute;
  // if (redirectToLogin && currentPage.value.name !== PageName.LOGIN_PAGE) {
  //   sessionStorage.setItem('redirect', currentPage.value.fullPath);
  //   router
  //     .push({ name: PageName.LOGIN_PAGE })
  //     // eslint-disable-next-line @typescript-eslint/no-empty-function
  //     .catch(() => {});
  // }
};

export const sendRefreshToken = async () => {
  let response;
  try {
    const API_URL = process.env.REACT_APP_API_URL;
    const refreshToken = localStorageAuthService.getRefreshToken();
    response = await axios.post(`${API_URL}/auth/refresh-token`, {
      refresh_Token: refreshToken
    });
    console.log(response.data?.access_Token);

    if (response?.status === HttpStatus.OK) {
      localStorageAuthService.setAccessToken(response.data?.data.access_Token);
      // localStorageAuthService.setAccessTokenExpiredAt(response.data?.data.expiresIn);
      return;
    }
    logout(true);
    return;
  } catch (error) {
    logout(true);
    return;
  }
};
