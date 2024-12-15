import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

export function SelectComponent() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Category 1</SelectItem>
          <SelectItem value="banana">Category 2</SelectItem>
          <SelectItem value="blueberry">Category 3</SelectItem>
          <SelectItem value="grapes">Category 4</SelectItem>
          <SelectItem value="pineapple">Category 4</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
