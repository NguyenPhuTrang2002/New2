// UserPage.js
import React, { useEffect, useState } from 'react';
import User from '../../components/User';
import { UserApi } from '../../features/api/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/common/interfaces';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const reload = useSelector((state: RootState) => state.reload);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [limit, setLimit] = useState(); // State để lưu giá trị limit
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const productApi = UserApi();
        const res = await productApi.getAllUsers(
          {
            page: currentPage,
            limit: 100,
            keyword: searchKeyword,
          }
        );
        setUsers(res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [reload, searchKeyword, limit, currentPage]);

  const handleKeywordChange = (newKeyword: string) => {
    setSearchKeyword(newKeyword);
  };
  return (
    <div className="min-h-screen overflow-y-auto bg-[#fff]">
      <User
        onKeywordChange={handleKeywordChange}
        ListUser={users} />
    </div>
  );
};

export default UserPage;