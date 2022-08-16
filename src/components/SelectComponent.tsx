import React from 'react';
import Select, { OptionProps } from 'react-select';
import { useStore } from '../store/store';

interface Props {
  data: Array<any>;
  handleChange: (e: any) => void;
  isDisabled: boolean;
  placeholder: number;
}

function SelectComponent(props: Props) {
  const [, dispatch] = useStore();
  const { data, handleChange, isDisabled, placeholder } = props;

  return (
    <Select
      options={data}
      placeholder={placeholder}
      onChange={handleChange}
      isDisabled={isDisabled}
    />
  );
}

export default SelectComponent;
