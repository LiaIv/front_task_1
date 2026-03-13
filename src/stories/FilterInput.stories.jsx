import { useState } from "react";
import { FilterInput } from "../components/FilterInput/FilterInput";

const options = ["драма", "комедия", "боевик", "триллер", "фантастика"];

export default {
  title: "UI/FilterInput",
  component: FilterInput,
};

export const Default = {
  render: () => {
    const [value, setValue] = useState("драма");

    return <FilterInput value={value} onChange={setValue} options={options} />;
  },
};
