import { HttpStatus, PageName } from '../../features/common/constants';
import localStorageAuthService from '../../features/common/storages/authStorage';
import axios from 'axios';

export const logout = (redirectToLogin = true) => {
  localStorageAuthService.resetAll();
  if (redirectToLogin) {
    const currentPage = sessionStorage.getItem('redirect') || '/';
    if (currentPage !== PageName.LOGIN_PAGE) {
      sessionStorage.setItem('redirect', currentPage);
      window.location.href = PageName.LOGIN_PAGE;
    }
  }
};

export const sendRefreshToken = async () => {
  let response;
  try {
    const API_URL = process.env.REACT_APP_API_URL;
    const refreshToken = localStorageAuthService.getRefreshToken();
    response = await axios.post(`${API_URL}/auth/refresh-token`, {
      refresh_Token: refreshToken
    });

    console.log(
      response
    );


    if (response?.status === 200) {
      localStorageAuthService.setAccessToken(response.data?.data.access_Token);
      localStorageAuthService.setAccessTokenExpiredAt(response.data?.data.time_Token)
      localStorageAuthService.setRefreshToken(response.data?.data.refresh_Token);
      return;
    }
    logout(true);
    return;
  } catch (error) {
    logout(true);
    return;
  }
};
