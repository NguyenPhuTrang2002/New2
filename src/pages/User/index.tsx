// UserPage.js
import React, { useEffect, useState } from 'react';
import User from '../../components/User';
import { UserApi } from '../../features/api/user';
interface UserType {
  avatar: string;
  name: string;
  email: string;
  birthday: string;
  phone: string;
}

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const productApi = UserApi();
        // console.log((await userApi.getAllUsers()).data.items);
        // setProducts((await userApi.getAllUsers()).data.items);
        const res = await productApi.getAllUsers(
          {
            page: 1,
            limit: 10
          }
        );
        console.log(res);
        setUsers(res.data.items);

      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);


  return (
    <div className="min-h-screen overflow-y-auto bg-[#fff]">
      <User ListUser={users} />
    </div>
  );
};

export default UserPage;