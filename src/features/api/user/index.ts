import { ICommonListQuery, IUserFromCreate } from "../../common/interfaces";
import { userApiService } from "../../service";

export const UserApi = () => {
  async function getAllUsers(query: ICommonListQuery): Promise<any> {
    const res = await userApiService.getAll(query);
    return res;
  }
  async function createUsers(body: IUserFromCreate): Promise<any> {
    const res = await userApiService._create(body);
    return res;
  }
  async function getUserDetails(userId: string): Promise<any> {
    const res = await userApiService._getDetail<any>(userId);
    return res;
  }
  async function updateUser(userId: string, body: IUserFromCreate): Promise<any> {
    try {
      const res = await userApiService._update(userId, body);
      return res;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }
  async function deleteUser(userId: string): Promise<any> {
    try {
      const res = await userApiService._delete(userId);
      return res;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
  return {
    getAllUsers,
    createUsers,
    getUserDetails,
    updateUser,
    deleteUser
  }
}
