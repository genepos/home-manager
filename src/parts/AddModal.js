import { Button, Typography, Box, TextField } from "@mui/material";
import "../css/AddModal.css";

function EditModal({ handleCloseModal }){
    return (
        <Box
        sx={{
            padding: "10px",
            margin: "30px auto",
            width: "40%",
            bgcolor: "white",
        }}
        >
        <div className="modalTitle">
            <Typography variant="h6" component="h4">
                追加
            </Typography>
        </div>
        <div className="input">
            <TextField className="inputName" id="outlined-basic" label="名前" variant="outlined" />
            <TextField className="inputStock" id="outlined-basic" label="ストック" variant="outlined" />
        </div>
        <div className="inputBottom">
            <TextField className="inputMemo" id="outlined-basic" label="メモ" multiline rows={4} variant="outlined" />
        </div>
        <Button  className="addBtn" variant="contained" onClick={handleCloseModal}>
            追加
        </Button>
        <Button className="closeBtn" variant="contained" onClick={handleCloseModal}>
            閉じる
        </Button>
        </Box>
    );
};

export default EditModal;