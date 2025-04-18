import { Button, Typography, Box, TextField } from "@mui/material";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utility/firebase";

function EditModal({ data, handleCloseModal }) {
  const modalData = data.data;

  const [name, setName] = useState(modalData.name || "");
  const [stock, setStock] = useState(modalData.value ?? "");
  const [memo, setMemo] = useState(modalData.memo ?? "");
  

  // 更新処理
  const handleUpdate = async () => {
    try {
      const targetDoc = doc(db, "items", modalData.id);
      await updateDoc(targetDoc, {
        name,
        value: stock,
        memo,
      });
      handleCloseModal(); // モーダル閉じる
    } catch (error) {
      console.error("更新エラー", error);
    }
  };

  return (
    <Box
      sx={{
        padding: "20px",
        margin: "30px auto",
        width: "50%",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Typography variant="h6">ID : {modalData.id}</Typography>

      <TextField
        label="名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        label="在庫数"
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <TextField
        label="メモ"
        multiline
        rows={4}
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
        <Button variant="contained" onClick={handleUpdate}>
          更新
        </Button>
        <Button variant="outlined" onClick={handleCloseModal}>
          閉じる
        </Button>
      </Box>
    </Box>
  );
}

export default EditModal;
