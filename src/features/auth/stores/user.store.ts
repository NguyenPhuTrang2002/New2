import { avatar } from './../../action/avatar';
import { email } from '../../action/email';
import { userApiService } from "../services";
import { useDispatch } from "react-redux";
export const useUserStore = () => {
  const dispatch = useDispatch();

  async function _getOwnProfile(access_token: { access_token: string }) {
    const res = await userApiService._getOwnProfile(access_token);

    if (res.success) {
      dispatch(avatar(res.data?.avatar));
      dispatch(email(res.data?.email));
    }
    return res;
  }

  return {
    _getOwnProfile
  }
}