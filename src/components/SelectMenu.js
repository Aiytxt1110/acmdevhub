import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const schedule = [
  { value: 'day', label: 'Dayly' },
  { value: 'week', label: 'Weekly' },
  { value: 'month', label: 'Monthly' },
  { value: 'year', label: 'Yearly' }
];

function SelectMenu() {
    const [selectedOption, setSelectedOption] = useState(schedule[0]);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        className='select'
        value={selectedOption}
        onChange={handleSelectChange}
        options={schedule}
      />
    </div>
  );
}

export default SelectMenu;
