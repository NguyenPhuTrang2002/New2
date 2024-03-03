import type { IBodyResponse } from '../../common/interfaces';
import axiosInstance from '../../../plugins/axios';
import { ApiService } from '../../../plugins/axios/api';
import type { IBodyLogin, ILoginResponse } from '../interfaces';

class AuthApiService extends ApiService {
  login(body: IBodyLogin): Promise<IBodyResponse<ILoginResponse>> {
    return this.client.post(`${this.baseUrl}/loginAdmin`, body);
  }
  logout(): Promise<IBodyResponse<Record<string, unknown>>> {
    return this.client.post(`${this.baseUrl}/logout`);
  }

  _getOwnProfile<R>(): Promise<IBodyResponse<R>> {
    return this.client.get('/user/my-profile');
  }
}

export const authApi = new AuthApiService({ baseUrl: '/auth' }, axiosInstance);
