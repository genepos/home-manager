import { Button, Typography, Box } from "@mui/material";

const EditModal = ({ handleCloseModal }) => {
  return (
    <Box
      sx={{
        padding: "10px",
        margin: "30px auto",
        width: "50%",
        bgcolor: "white",
      }}
    >
      <Typography variant="h6" component="h4">
        テストモーダル
      </Typography>
      <Button variant="contained" onClick={handleCloseModal}>
        閉じる
      </Button>
    </Box>
  );
};

export default EditModal;