import React, { FC } from "react";
import { Flex, SelectInput } from "vcc-ui";

interface Props {
  options: string[];
  selectedOption: string;
  onChange: (v: any) => void;
}
const Filter: FC<Props> = ({ options, selectedOption, onChange }) => {
  return (
    <Flex
      extend={{
        padding: "10px",
        marginBottom: "20px",
        width: "250px",
      }}
    >
      <SelectInput value={selectedOption} onChange={onChange}>
        <option value="allBodyType">Select type</option>
        {options.map((item: string) => {
          return (
            <option value={item} key={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </SelectInput>
    </Flex>
  );
};

export default Filter;
