function Products({ callback }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 ">
      <div className="w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500">
        <div className="bg-[#fff] flex flex-col w-[440px] rounded-xl ">
          <h1 className="text-[18px] font-medium px-4 py-5">Tạo mới sản phẩm</h1>
          <div className="w-full bg-[#F7F8FA] rounded-b-lg h-auto px-4">
            <div className="flex mt-[16px]">
              <p className="mb-2">Tên sản phẩm </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className="border w-full border-gray-200 leading-5 py-3 pl-4 mb-5 rounded-md" type="text" placeholder="Nhập Tên Sản Phẩm" />
            <div className="flex">
              <p className="mb-2">Giá </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className="border w-full border-gray-200 leading-5 py-3 pl-4 mb-5 rounded-md" type="text" placeholder="Nhập Giá Của Sản Phẩm" />
            <div className="flex">
              <p className="mb-2">Số lượng </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className="border w-full border-gray-200 leading-5 py-3 pl-4 mb-5 rounded-md" type="text" placeholder="Nhập Số Lượng Sản Phẩm" />
            <div className="flex">
              <p className="mb-2">Mô tả </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <textarea rows={5} className="border w-full border-gray-200 leading-5 py-3 pl-4 mb-5 rounded-md" type="text" placeholder="Nhập mô tả" />
            <div className="flex">
              <p className="mb-2">Ảnh sản Phẩm </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className="border w-full border-gray-200 leading-5 py-3 pl-4 mb-5 rounded-md" type="text" placeholder="Nhập link ảnh sản phẩm" />
          </div>

          <div className="px-5 flex gap-4 justify-end items-center h-[70px] bg-[#fff] rounded-b-lg">
            <button className="leading-[40px] rounded-md border border-gray-200 w-[70px]" onClick={callback} type="button">Hủy</button>
            <button className="bg-[#0F60FF] w-[150px] leading-[40px] text-[#fff] rounded-md " type="button">Tạo mới</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Products