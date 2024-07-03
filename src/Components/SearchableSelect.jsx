import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Alaska', label: 'Alaska' },
  { value: 'California', label: 'California' },
  { value: 'Delaware', label: 'Delaware' },
  { value: 'Tennessee', label: 'Tennessee' },
  { value: 'Texas', label: 'Texas' },
  { value: 'Washington', label: 'Washington' },
];

const SearchableSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="form-group">
      <label>Multiple</label>
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        placeholder="Select a State"
        className="select2bs4"
        styles={{ container: (base) => ({ ...base, width: '100%' }) }}
      />
    </div>
  );
};

export default SearchableSelect;
