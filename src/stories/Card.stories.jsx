import { Stack, Typography } from "@mui/material";
import { Card } from "../components/ui/Card";

export default {
  title: "UI/Card",
  component: Card,
};

export const Default = {
  render: () => (
    <Card>
      <Stack spacing={1}>
        <Typography variant="h3">Переиспользуемая карточка</Typography>
        <Typography color="text.secondary">
          Этот компонент выступает базовым контейнером для секций проекта.
        </Typography>
      </Stack>
    </Card>
  ),
};
