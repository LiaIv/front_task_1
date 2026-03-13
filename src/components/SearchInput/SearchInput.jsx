import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { InputAdornment, TextField } from "@mui/material";

export function SearchInput({ value, onChange }) {
  return (
    <TextField
      fullWidth
      label="Поиск фильма"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Например, Интерстеллар"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
    />
  );
}
