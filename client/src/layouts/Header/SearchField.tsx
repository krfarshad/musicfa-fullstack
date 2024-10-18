import TextField from "@mui/material/TextField";
import { ChangeEvent, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "@/hooks/useDebounce";

const SearchField = () => {
  const [value, setValue] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const changeSearchField = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    setValue(targetValue);
  };

  const fetchData = () => {
    console.log("fetch", value);
  };

  useDebounce({ callback: fetchData });

  return (
    <>
      <TextField
        ref={ref}
        variant="outlined"
        label="Search"
        size="small"
        onChange={changeSearchField}
        slotProps={{
          input: {
            endAdornment: <SearchIcon fontSize="small" color="inherit" />,
          },
        }}
      />
    </>
  );
};

export default SearchField;
