import React, { useState } from 'react';

const Navigation = () => {
  const [numberOfRows, setNumberOfRows] = useState(10);

  const handleInputChange = (e) => {
    setNumberOfRows(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label className='text-[#8B909A]' htmlFor="numberOfRows">Showing </label>
      <select className="border border-gray-200 h-8 w-[70px] rounded-md"
        id="numberOfRows"
        value={numberOfRows}
        onChange={handleInputChange}
      >
        {[10, 20, 30, 40, 50].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label className='mx-2 text-[#8B909A]' htmlFor="numberOfRows">Of 50 </label>
    </div>
  );
};

export default Navigation;
