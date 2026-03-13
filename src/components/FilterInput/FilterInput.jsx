import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import { InputAdornment, MenuItem, TextField } from "@mui/material";

export function FilterInput({ value, onChange, options }) {
  return (
    <TextField
      select
      fullWidth
      label="Фильтр по жанру"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <FilterAltRoundedIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
