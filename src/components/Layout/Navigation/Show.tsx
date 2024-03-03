import React from 'react';
import { useDispatch } from 'react-redux';
import { limit } from '../../../features/action/limit'; // Import action creator

// Định nghĩa lại Props interface với totalNumberOfProducts
interface Props {
  handleNumberOfRowsChange: (numberOfRows: number) => void;
  totalNumberOfProducts: number;
}

const Navigation = ({ handleNumberOfRowsChange, totalNumberOfProducts }: Props) => {
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimitValue = parseInt(e.target.value, 10);
    handleNumberOfRowsChange(newLimitValue); // Gửi giá trị mới cho handleNumberOfRowsChange
    handleLimitChange(newLimitValue); // Dispatch action với giá trị giới hạn mới
  };


  const handleLimitChange = (limitValue: number) => {
    dispatch(limit(limitValue)); // Dispatch action với giá trị giới hạn mới
  };
  return (
    <div>
      <label className='text-[#8B909A]' htmlFor="numberOfRows">Showing </label>
      <select
        className="border border-gray-200 h-8 w-[70px] rounded-mdx"
        id="numberOfRows"
        onChange={handleInputChange}
      >
        {[10, 20, 30, 40, 50].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label className='mx-2 text-[#8B909A]' htmlFor="numberOfRows">of {totalNumberOfProducts} </label>
    </div>
  );
};

export default Navigation;
