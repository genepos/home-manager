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
    const sanitizeInput = (input) => {
      const tagPattern = /<\/?[^>]+(>|$)/g;
      return !tagPattern.test(input);
    };    
    // 名前チェック
    if (name.trim() === "") {
      alert("名前が入力されていません。");
      return;
    }
    if (name.length > 100) {
      alert("名前は100文字以内で入力してください。");
      return;
    }
    if (!sanitizeInput(name)) {
      alert("名前にHTMLタグが含まれています。");
      return;
    }
          
    // ストックチェック
    if (stock === "" || isNaN(Number(stock))) {
      alert("ストックに数値以外が入力されています。");
      return;
    }
          
    // メモチェック
    if (memo.length > 200) {
      alert("メモは200文字以内で入力してください。");
      return;
    }
    if (!sanitizeInput(memo)) {
      alert("メモにHTMLタグが含まれています。");
      return;
    }
    try {
      const targetDoc = doc(db, "items", modalData.id);
      await updateDoc(targetDoc, {
        name,
        value: Number(stock),
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
