import Sidebar from "../Layout/Sidebar/index";
import Header from "../Layout/Header";
import Listusers from "./listusers"
import UsersAdd from "./addusers"
import { ChangeEvent, useEffect, useState } from "react"
import Page from "../Layout/Navigation/page"
import Navigation from "../Layout/Navigation/Show";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading";
interface Props {
  ListUser: any;
  onKeywordChange: (newKeyword: string) => void;
  loading: boolean;
}

interface UserArray {
  avatar: string;
  id: string;
  name: string;
  email: string;
  birthday: string;
  phone: string;
}

const User = ({ ListUser, onKeywordChange, loading }: Props) => {
  const [ListUserArray, setListUserArray] = useState<UserArray[]>([]);
  const [numberOfRows, setNumberOfRows] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setListUserArray(ListUser);
  }, [ListUser]);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    onKeywordChange(value);
  };
  const handleCancel = () => {
    setActive(false);
  };

  const handleNumberOfRowsChange = (newNumberOfRows: number) => {
    setNumberOfRows(newNumberOfRows);
    setCurrentPage(1);
  };
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };


  const totalPages = Math.ceil(ListUserArray.length / numberOfRows);
  const startIndex = (currentPage - 1) * numberOfRows;
  const endIndex = startIndex + numberOfRows;
  const currentProductPage = ListUserArray.slice(startIndex, endIndex);

  return (
    <div className="bg-[#fff]">
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        {/* Content */}
        <div className="w-full px-[26px] py-2 h-auto">
          {/* Header */}
          <Header title={'Danh sách người dùng'} />
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex justify-center items-center rounded-md bg-[#fff] h-[37px] w-[320px] shadow-md">
              <div className="flex justify-center items-center w-[100%]">
                <input onChange={handleInputChange} className="pl-3 outline-none leading-5 w-[100%]" type="text" placeholder="Tìm kiếm" />
                <img className="mr-3" src="./icons/search.svg" alt="search" />
              </div>
            </div>
            <div className="flex" onClick={() => setActive(true)}>
              <img className="cursor-pointer" src="./icons/add.svg" alt="addNew" />
            </div>
          </div>
          <div className="w-full bg-white rounded-t-xl shadow-md max-h-[500px] overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="text-[13px] border-b border-gray-300 h-[60px]">
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">AVATAR</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">TÊN NGƯỜI DÙNG</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">EMAIL</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">NGÀY SINH</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">ĐIỆN THOẠI</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {loading ? (
                  <tr>
                    <td className="text-center py-4" colSpan={6}>
                      <Loading />
                    </td>
                  </tr>
                ) : (
                  currentProductPage.map((user: UserArray) => (
                    <Listusers
                      key={user.id}
                      id={user.id}
                      avatar={user.avatar}
                      name={user.name}
                      email={user.email}
                      birthday={user.birthday}
                      phone={user.phone}
                    />
                  ))
                )}
              </tbody>

            </table>
          </div>
          <div className="flex justify-between py-4 px-6  bg-white rounded-b-xl">
            <Navigation
              handleNumberOfRowsChange={handleNumberOfRowsChange}
              totalNumberOfProducts={ListUserArray.length}
            />
            <div className="flex justify-center items-center gap-2">
              <button
                className="bg-[#F1F2F6] w-7 h-7 flex justify-center items-center rounded-md"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <img src="./icons/leftback.svg" alt="backPage" />
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <Page
                  key={`page-${pageNumber}`}
                  pageNumber={pageNumber}
                  onPageChange={handlePageChange}
                  activePage={currentPage}
                  totalItems={ListUserArray.length}
                  itemsPerPage={numberOfRows}
                />
              ))
              }
              <button className="bg-[#F1F2F6] w-7 h-7 flex justify-center items-center rounded-md">
                <img src="./icons/rightnext.svg" alt="nextPage" />
              </button>
            </div>
          </div>
        </div>
        {
          active && (
            <UsersAdd handleClose={handleCancel} />
          )
        }
      </div>
      <ToastContainer />
    </div>
  )
}
export default User