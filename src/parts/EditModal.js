import { Button, Typography, Box } from "@mui/material";

function EditModal({ data,handleCloseModal }){
    const modalData = data.data
    console.log(modalData);
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
            ID : {modalData.id}
        </Typography>
        <Typography variant="h6" component="h4">
            名前 : {modalData.name}
        </Typography>
        <Typography variant="h6" component="h4">
           のこり {modalData.value} 個
        </Typography>
        <Typography variant="h6" component="h4">
            メモ : {modalData.memo}
        </Typography>
        <Button variant="contained" onClick={handleCloseModal}>
            閉じる
        </Button>
        </Box>
    );
};

export default EditModal;