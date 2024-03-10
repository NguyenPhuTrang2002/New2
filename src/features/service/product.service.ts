
import { ICommonListQuery, IBodyResponse, IGetListResponse } from "../../features/common/interfaces";
import axiosInstance from "../../plugins/axios";
import { ApiService } from "../../plugins/axios/api"
class ProductApiService extends ApiService {
  constructor() {
    super({ baseUrl: '/product' }, axiosInstance);
  }
  getAll<T>(query: ICommonListQuery): Promise<IBodyResponse<IGetListResponse<T>>> {
    // return this.client.get(`${this.baseUrl}/`);
    return this._getList<T>(query);
  }

}

export const productApiService = new ProductApiService();