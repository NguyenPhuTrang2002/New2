import { type AxiosResponse } from 'axios';
import {
  ErrorCode,
  Gender,
  HttpStatus,
  OrderDirection,
  PageName
} from './constants';

export interface IResponseError<T = any> {
  key: string;
  message: string;
  errorCode: ErrorCode;
  data?: T;
}

export interface IBodyResponse<T> extends AxiosResponse {
  success: boolean;
  isRequestError?: boolean;
  code: HttpStatus;
  message: string;
  error: string;
  data: T;
  errors?: IResponseError<any>[];
}

export interface ICommonListQuery {
  page?: number;
  limit?: number;
  orderBy?: string;
  orderDirection?: OrderDirection | string;
  keyword?: string;
}

export interface IUser {
  _id: string;
  email: string;
  name?: string;
}

export interface ILoginResponse {
  accessToken: {
    token: string;
    expiresIn: number;
  };
  refreshToken: {
    token: string;
    expiresIn: number;
  };
  profile: IUser;
}

export interface IGetListResponse<T> {
  items: T[];
  totalItems: number;
}

export interface IDropDownOption {
  value?: string | number;
  label?: string;
}

export interface IOption {
  value: string | number;
  title: string;
  disabled?: boolean;
  other?: any;
}

export interface ITime {
  hours: number;
  minutes: number;
  seconds?: number;
}

export type IOrderDirection = OrderDirection | undefined;

export interface IRoleDetail {
  id: string;
  name?: string;
}

export interface ITableSorter {
  field: string;
  direction?: IOrderDirection;
}
// Permissions
export interface IBasePermission {
  create?: boolean;
  delete?: boolean;
  update?: boolean;
  view?: boolean;
}

//PRODUCT
export interface IProductFormCreate {
  name: string;
  price: string;
  quantity: string;
  description: string;
  image: string;
}
export interface IProduct {
  id: string;
  name: string;
  price: string;
  quantity: string;
  description: string;
  image: string;
}

export interface RootState {
  keyword: string;
  reload: boolean;
  limit: number;
}

export interface IUserFromCreate {
  name: string;
  email: string;
  birthday: string;
  phone: string;
  avatar: string;
}


