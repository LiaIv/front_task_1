import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import {
  Alert,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/ui/Card";
import { setUserName } from "../store/slices/userSlice";

export default function ProfilePage() {
  const storedName = useSelector((state) => state.user.name);
  const [inputValue, setInputValue] = useState(storedName === "Гость" ? "" : storedName);
  const dispatch = useDispatch();

  const handleSaveName = () => {
    dispatch(setUserName(inputValue.trim()));
  };

  return (
    <Card>
      <Stack spacing={3}>
        <div>
          <Typography variant="overline" color="secondary.light">
            Redux Toolkit
          </Typography>
          <Typography variant="h2">Имя пользователя в глобальном store</Typography>
        </div>

        <Stack spacing={2} sx={{ maxWidth: 460 }}>
          <TextField
            id="user-name"
            label="Имя пользователя"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Например, Розалия"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaceRoundedIcon sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="button"
            variant="contained"
            color="secondary"
            startIcon={<SaveRoundedIcon />}
            onClick={handleSaveName}
            sx={{ alignSelf: "flex-start", borderRadius: 999 }}
          >
            Сохранить имя
          </Button>
        </Stack>

        <Alert severity="success">Сейчас в store: {storedName}</Alert>
      </Stack>
    </Card>
  );
}
