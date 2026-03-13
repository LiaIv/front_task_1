import { useState } from "react";
import { SearchInput } from "../components/SearchInput/SearchInput";

export default {
  title: "UI/SearchInput",
  component: SearchInput,
};

export const Default = {
  render: () => {
    const [value, setValue] = useState("Интерстеллар");

    return <SearchInput value={value} onChange={setValue} />;
  },
};
