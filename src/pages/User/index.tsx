// UserPage.js
import React, { useEffect, useState } from 'react';
import User from '../../components/User';
import { UserApi } from '../../features/api/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/common/interfaces';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const reload = useSelector((state: RootState) => state.reload);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [limit, setLimit] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
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
      finally {
        setLoading(false);
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
        ListUser={users}
        loading={loading}
      />
    </div>
  );
};

export default UserPage;