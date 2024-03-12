import React, { useState } from "react"
import { IUserFromCreate } from "../../features/common/interfaces";
import { useDispatch } from "react-redux";
import { UserApi } from "../../features/api";
import { reLoad } from "../../features/action/reloadData";
import { toast } from "react-toastify";
import EditUsers from "./edituser";
interface ListitemsProps {
  id: string;
  avatar: string;
  name: string;
  email: string;
  birthday: string;
  phone: string;
}
const Listusers = ({ id, avatar, name, email, birthday, phone }: ListitemsProps) => {
  const [editingUser, setEditingUser] = useState<IUserFromCreate | null>(null);
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleCancel = () => {
    setActive(false);
  };

  const handleEditUser = async () => {
    setIsFormOpen(true);
  };

  const deleteUser: (userId: string) => Promise<any> = async (userId) => {
    try {
      const userApi = UserApi();
      const res = await userApi.deleteUser(userId);
      return res;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };

  const handleDeleteUser = async () => {
    console.log('id: ', id);
    setShowConfirm(true);
  };

  const confirmDeleteUser = async () => {
    try {
      const res = await deleteUser(id);
      if (res.success) {
        dispatch(reLoad(true));
        toast.success("Xóa thông tin người dùng thành công !", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        console.error('Failed to delete user :', res.error);
      }
    } catch (error) {
      console.error('Error deleting user :', error);
    }
    setShowConfirm(false);
  };

  return (
    <tr className="border-b border-gray-300">
      <td className="flex justify-center it py-[13px]">
        <img className="w-[36px] h-[36]" src={avatar} alt="User" />
      </td>
      <td className="text-center">{name}</td>
      <td className="text-center">{email}</td>
      <td className="text-center">{birthday}</td>
      <td className="text-center">{phone}</td>
      <td className="">
        <div className="w-full h-full flex justify-center items-center gap-[10px] px-5 py-[13px]">
          <div onClick={() => { setActive(true); handleEditUser(); }}>
            <img className="cursor-pointer" src="./icons/edit.svg" alt="Edit" />
          </div>
          <div onClick={handleDeleteUser}>
            <img className="cursor-pointer" src="./icons/delete.svg" alt="Delete" />
          </div>
        </div>
      </td>
      {
        active && (
          <EditUsers id={id} handleClose={handleCancel} />
        )
      }
      {showConfirm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <p className="text-xl">Bạn có chắc chắn muốn xóa người dùng này ?</p>
            <div className="flex justify-between mt-5">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setShowConfirm(false)}>Hủy</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={confirmDeleteUser}>Xóa</button>
            </div>
          </div>
        </div>
      )}
    </tr>
  );
};
export default Listusers