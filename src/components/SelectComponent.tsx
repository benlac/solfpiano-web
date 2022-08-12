import React from 'react';
import Select, { OptionProps } from 'react-select';
import { useStore } from '../store/store';

interface Props {
  data: Array<any>;
  handleChange: (e: any) => void;
  isDisabled: boolean;
}

function SelectComponent(props: Props) {
  const [, dispatch] = useStore();
  const { data, handleChange, isDisabled } = props;

  return (
    <Select
      options={data}
      placeholder="Choose"
      onChange={handleChange}
      isDisabled={isDisabled}
    />
  );
}

export default SelectComponent;
