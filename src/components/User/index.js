import Sidebar from "../Layout/Sidebar/index";
import Header from "../Layout/Header";
import Navigator from "../Layout/Navigation"
import Listusers from "./listusers"
import Users from "../Add/users"
import { useState } from "react"
import Page from "../Layout/Navigation/page"

const ListUsers = [
  {
    avt: "./images/img5.png",
    name: "Dianne Russell",
    email: "nevaeh.simmons@example.com",
    date: "1989/04/06",
    phone: "063-222-1125"
  },
  {
    avt: "./images/img6.png",
    name: "Leslie Alexander",
    email: "curtis.weaver@example.com",
    date: "1976/09/12",
    phone: "088-124-1555"
  },
  {
    avt: "./images/img7.png",
    name: "Wade Warren",
    email: "debbie.baker@example.com",
    date: "1954/02/08",
    phone: "063-137-3355"
  },
]
const ListPage = [1, 2, 3, 4, 5]
function User() {
  const [active, setActive] = useState(false);
  const handleCancel = () => {
    setActive(false);
  };
  return (
    <div className="min-h-screen overflow-y-auto bg-[#fff]">
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        {/* Content */}
        <div className="w-4/5 p-4">
          {/* Header */}
          <Header />
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex justify-center items-center bg-[#fff] h-[37px] w-[320px]">
              <div className="flex justify-center items-center w-[100%]">
                <input className="pl-3 leading-5 w-[100%]" type="text" placeholder="Tìm kiếm" />
                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g clip-path="url(#clip0_2_11987)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.87501 1.5C6.85845 1.50009 5.85666 1.74327 4.9532 2.20927C4.04974 2.67527 3.27083 3.35056 2.68143 4.17882C2.09204 5.00707 1.70926 5.96426 1.56504 6.97053C1.42081 7.97681 1.51932 9.00298 1.85234 9.96344C2.18536 10.9239 2.74324 11.7908 3.47943 12.4918C4.21563 13.1928 5.10879 13.7076 6.08439 13.9932C7.06 14.2788 8.08976 14.327 9.08777 14.1337C10.0858 13.9404 11.0231 13.5112 11.8215 12.882L14.5605 15.621C14.702 15.7576 14.8914 15.8332 15.0881 15.8315C15.2847 15.8298 15.4728 15.7509 15.6119 15.6119C15.7509 15.4728 15.8298 15.2847 15.8315 15.0881C15.8332 14.8914 15.7576 14.702 15.621 14.5605L12.882 11.8215C13.623 10.8815 14.0844 9.7518 14.2133 8.56179C14.3423 7.37179 14.1336 6.16952 13.6112 5.09257C13.0887 4.01562 12.2737 3.10752 11.2592 2.47217C10.2448 1.83683 9.07198 1.49992 7.87501 1.5ZM3.00001 7.875C3.00001 6.58207 3.51362 5.34209 4.42786 4.42785C5.3421 3.51361 6.58208 3 7.87501 3C9.16794 3 10.4079 3.51361 11.3222 4.42785C12.2364 5.34209 12.75 6.58207 12.75 7.875C12.75 9.16793 12.2364 10.4079 11.3222 11.3221C10.4079 12.2364 9.16794 12.75 7.87501 12.75C6.58208 12.75 5.3421 12.2364 4.42786 11.3221C3.51362 10.4079 3.00001 9.16793 3.00001 7.875Z" fill="#8B909A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_11987">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex" onClick={() => setActive(true)}>
              <svg width="122" height="40" viewBox="0 0 122 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="122" height="40" rx="6" fill="#0F60FF" />
                <path d="M28 20H32M32 20H36M32 20V24M32 20V16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M46.5772 16.411V14.878H54.4732V16.411H51.4352V25H49.7272V16.411H46.5772ZM56.9428 25.14C56.4808 25.14 56.0654 25.056 55.6968 24.888C55.3328 24.7153 55.0458 24.4703 54.8358 24.153C54.6304 23.831 54.5278 23.4413 54.5278 22.984C54.5278 22.186 54.8148 21.584 55.3888 21.178C55.9674 20.772 56.8891 20.5597 58.1538 20.541L59.2318 20.513V20.023C59.2318 19.6403 59.1174 19.3417 58.8888 19.127C58.6648 18.9077 58.3148 18.8003 57.8388 18.805C57.4888 18.8097 57.1668 18.8937 56.8728 19.057C56.5834 19.2157 56.3921 19.484 56.2988 19.862H54.8498C54.8778 19.3673 55.0201 18.9543 55.2768 18.623C55.5381 18.287 55.8951 18.0373 56.3478 17.874C56.8004 17.706 57.3231 17.622 57.9158 17.622C58.6064 17.622 59.1688 17.713 59.6028 17.895C60.0368 18.077 60.3564 18.3407 60.5618 18.686C60.7671 19.0267 60.8698 19.4397 60.8698 19.925V25H59.4348L59.3018 23.698C59.0404 24.244 58.7091 24.622 58.3078 24.832C57.9111 25.0373 57.4561 25.14 56.9428 25.14ZM57.4958 23.985C57.7058 23.985 57.9134 23.9477 58.1188 23.873C58.3241 23.7937 58.5108 23.6887 58.6788 23.558C58.8468 23.4227 58.9798 23.2733 59.0778 23.11C59.1804 22.9467 59.2318 22.7763 59.2318 22.599V21.458L58.3428 21.472C57.9041 21.4767 57.5214 21.5233 57.1948 21.612C56.8681 21.7007 56.6114 21.843 56.4248 22.039C56.2428 22.2303 56.1518 22.487 56.1518 22.809C56.1518 23.1777 56.2801 23.467 56.5368 23.677C56.7934 23.8823 57.1131 23.985 57.4958 23.985ZM57.0758 27.66V26.19H58.7348V27.66H57.0758ZM65.8655 25.14C65.1748 25.14 64.5728 24.993 64.0595 24.699C63.5462 24.4003 63.1472 23.9733 62.8625 23.418C62.5825 22.8627 62.4425 22.1953 62.4425 21.416C62.4425 20.66 62.5778 19.9973 62.8485 19.428C63.1238 18.8587 63.5182 18.4153 64.0315 18.098C64.5448 17.7807 65.1585 17.622 65.8725 17.622C66.5632 17.622 67.1628 17.7737 67.6715 18.077C68.1802 18.3803 68.5722 18.8143 68.8475 19.379C69.1275 19.9437 69.2675 20.6227 69.2675 21.416C69.2675 22.1487 69.1345 22.795 68.8685 23.355C68.6072 23.9103 68.2222 24.3467 67.7135 24.664C67.2095 24.9813 66.5935 25.14 65.8655 25.14ZM65.8725 23.845C66.2645 23.845 66.5865 23.7377 66.8385 23.523C67.0952 23.3083 67.2842 23.0143 67.4055 22.641C67.5315 22.2677 67.5945 21.843 67.5945 21.367C67.5945 20.9237 67.5385 20.5153 67.4265 20.142C67.3192 19.7687 67.1372 19.47 66.8805 19.246C66.6285 19.0173 66.2925 18.903 65.8725 18.903C65.4758 18.903 65.1468 19.008 64.8855 19.218C64.6288 19.4233 64.4352 19.7127 64.3045 20.086C64.1785 20.4547 64.1155 20.8817 64.1155 21.367C64.1155 21.8057 64.1715 22.214 64.2835 22.592C64.4002 22.9653 64.5868 23.2687 64.8435 23.502C65.1002 23.7307 65.4432 23.845 65.8725 23.845ZM73.8 25V17.762H75.459V18.798C75.669 18.4807 75.9537 18.2053 76.313 17.972C76.677 17.7387 77.139 17.622 77.699 17.622C77.9557 17.622 78.2147 17.6663 78.476 17.755C78.742 17.8437 78.987 17.9743 79.211 18.147C79.4397 18.3197 79.6217 18.5343 79.757 18.791C79.9857 18.4503 80.289 18.1703 80.667 17.951C81.0497 17.7317 81.479 17.622 81.955 17.622C82.2163 17.622 82.4847 17.664 82.76 17.748C83.04 17.832 83.2967 17.972 83.53 18.168C83.7633 18.364 83.9523 18.6323 84.097 18.973C84.2417 19.309 84.314 19.7313 84.314 20.24V25H82.613V20.443C82.613 20.0837 82.55 19.8013 82.424 19.596C82.298 19.3907 82.1347 19.246 81.934 19.162C81.738 19.0733 81.528 19.029 81.304 19.029C81.1033 19.029 80.8933 19.0687 80.674 19.148C80.4593 19.2273 80.275 19.358 80.121 19.54C79.9717 19.722 79.897 19.967 79.897 20.275V25H78.196V20.17C78.196 19.918 78.1307 19.708 78 19.54C77.8693 19.372 77.7037 19.246 77.503 19.162C77.307 19.0733 77.1063 19.029 76.901 19.029C76.691 19.029 76.4763 19.0733 76.257 19.162C76.0423 19.2507 75.8627 19.386 75.718 19.568C75.5733 19.75 75.501 19.9857 75.501 20.275V25H73.8ZM89.9467 14.878H91.7667L89.7647 16.915H88.5047L89.9467 14.878ZM89.1487 25.14C88.458 25.14 87.856 24.993 87.3427 24.699C86.8294 24.4003 86.4304 23.9733 86.1457 23.418C85.8657 22.8627 85.7257 22.1953 85.7257 21.416C85.7257 20.66 85.861 19.9973 86.1317 19.428C86.407 18.8587 86.8014 18.4153 87.3147 18.098C87.828 17.7807 88.4417 17.622 89.1557 17.622C89.8464 17.622 90.446 17.7737 90.9547 18.077C91.4634 18.3803 91.8554 18.8143 92.1307 19.379C92.4107 19.9437 92.5507 20.6227 92.5507 21.416C92.5507 22.1487 92.4177 22.795 92.1517 23.355C91.8904 23.9103 91.5054 24.3467 90.9967 24.664C90.4927 24.9813 89.8767 25.14 89.1487 25.14ZM89.1557 23.845C89.5477 23.845 89.8697 23.7377 90.1217 23.523C90.3784 23.3083 90.5674 23.0143 90.6887 22.641C90.8147 22.2677 90.8777 21.843 90.8777 21.367C90.8777 20.9237 90.8217 20.5153 90.7097 20.142C90.6024 19.7687 90.4204 19.47 90.1637 19.246C89.9117 19.0173 89.5757 18.903 89.1557 18.903C88.759 18.903 88.43 19.008 88.1687 19.218C87.912 19.4233 87.7184 19.7127 87.5877 20.086C87.4617 20.4547 87.3987 20.8817 87.3987 21.367C87.3987 21.8057 87.4547 22.214 87.5667 22.592C87.6834 22.9653 87.87 23.2687 88.1267 23.502C88.3834 23.7307 88.7264 23.845 89.1557 23.845ZM93.8807 17.209C93.876 17.8203 93.7944 18.308 93.6357 18.672C93.4817 19.036 93.2227 19.288 92.8587 19.428C92.4947 19.568 91.9977 19.603 91.3677 19.533V18.651C91.5917 18.6557 91.7807 18.6463 91.9347 18.623C92.0934 18.595 92.2217 18.5367 92.3197 18.448C92.4224 18.3547 92.5017 18.21 92.5577 18.014C92.6184 17.818 92.658 17.5497 92.6767 17.209H93.8807ZM96.6253 17.762V25H94.9873V17.762H96.6253ZM96.6463 14.885V16.495H94.9593V14.885H96.6463Z" fill="white" />
              </svg>
            </div>
          </div>

          <div className="w-full bg-[#fff] h-auto rounded-xl">
            <table className="w-full">
              <thead>
                <tr className="text-[13px] border-b border-gray-300 h-[60px]">
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">AVATAR</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">TÊN NGƯỜI DÙNG</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-left pl-10">EMAIL</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">NGÀY SINH</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">ĐIỆN THOẠI</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody>
                {ListUsers.map((users, USR) => (
                  <Listusers
                    key={USR}
                    avt={users.avt}
                    name={users.name}
                    email={users.email}
                    date={users.date}
                    phone={users.phone}
                  />
                ))}
              </tbody>
            </table>
            <div className="flex justify-between py-4 px-6">
              <Navigator />
              <div className="flex justify-center items-center gap-2">
                <button className="bg-[#F1F2F6] w-7 h-7 flex justify-center items-center rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 4L6 8L10 12" stroke="#8B909A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                {
                  ListPage.map((pageNumber, PAG) => (
                    <Page key={PAG} pageNumber={pageNumber} />
                  ))
                }
                <button className="bg-[#F1F2F6] w-7 h-7 flex justify-center items-center rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="#8B909A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {
          active && (
            <Users callback={handleCancel} />
          )
        }
      </div>
    </div>
  )
}
export default User