import { ICommonListQuery } from "../../common/interfaces";
import { userApiService } from "../../service";

export const UserApi = () => {
  async function getAllUsers(query: ICommonListQuery): Promise<any> {
    const res = await userApiService.getAll(query);
    return res;
  }
  return {
    getAllUsers
  }
}
