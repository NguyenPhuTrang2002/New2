import { type IBodyResponse } from '../../common/interfaces';
import axiosInstance from '../../../plugins/axios';
import { ApiService } from '../../../plugins/axios/api';
import type { IUserUpdatePassword } from '../interfaces';
import { type IUserChangePassword } from './../interfaces';
class UserApiService extends ApiService {
  _getOwnProfile<R>(): Promise<R> {
    return this.client.get<R, R>(`${this.baseUrl}/my-profile`);
  }

  updatePassword(body: IUserUpdatePassword): Promise<IBodyResponse<any>> {
    return this.client.post(`${this.baseUrl}/update-password`, body);
  }

  forgotPassword(email: string): Promise<IBodyResponse<any>> {
    return this.client.post(`${this.baseUrl}/forgot-password`, {
      email,
    });
  }

  changePassword(body: IUserChangePassword): Promise<IBodyResponse<any>> {
    return this.client.post(`${this.baseUrl}/change-password`, body);
  }
}

export const userApiService = new UserApiService({ baseUrl: '/user' }, axiosInstance);
