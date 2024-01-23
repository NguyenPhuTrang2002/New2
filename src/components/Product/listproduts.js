const listproduts = ({ title, price, total, description, img }) => {
  return (
    <tr className="border-b border-gray-300">
      <td className="text-center">{title}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{total}</td>
      <td className="text-left pl-10">{description}</td>
      <td className="flex justify-center it py-[13px]">
        <img src={img} alt="Product" />
      </td>
      <td className="">
        <div className="w-full h-full flex justify-center items-center gap-[10px] px-5 py-[13px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M9.5 7H6.5C5.39543 7 4.5 7.89543 4.5 9V18C4.5 19.1046 5.39543 20 6.5 20H15.5C16.6046 20 17.5 19.1046 17.5 18V15" stroke="#8B909A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.5 15H12.5L21 6.49998C21.8284 5.67156 21.8284 4.32841 21 3.49998C20.1716 2.67156 18.8284 2.67156 18 3.49998L9.5 12V15" stroke="#8B909A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.5 5L19.5 8" stroke="#8B909A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 7H20.5" stroke="#8B909A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5 11V17" stroke="#8B909A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.5 11V17" stroke="#8B909A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.5 7L6.5 19C6.5 20.1046 7.39543 21 8.5 21H16.5C17.6046 21 18.5 20.1046 18.5 19L19.5 7" stroke="#8B909A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.5 7V4C9.5 3.44772 9.94772 3 10.5 3H14.5C15.0523 3 15.5 3.44772 15.5 4V7" stroke="#8B909A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </td>
    </tr>
  )
}
export default listproduts