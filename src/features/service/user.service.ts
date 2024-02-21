import axiosInstance from "../../plugins/axios";
import { ApiService } from "../../plugins/axios/api";
import { ICommonListQuery, IBodyResponse, IGetListResponse } from "../../features/common/interfaces";
class UserApiService extends ApiService {
  constructor() {
    super({ baseUrl: '/user' }, axiosInstance);
  }
  getAll<T>(query: ICommonListQuery): Promise<IBodyResponse<IGetListResponse<T>>> {
    // return this.client.get(`${this.baseUrl}/`);
    return this._getList<T>(query);
  }
}

export const userApiService = new UserApiService();