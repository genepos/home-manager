import { Button, Typography, Box, TextField } from "@mui/material";
import "../css/AddModal.css";
import { collection, addDoc, setDoc } from 'firebase/firestore';
import { db } from '../utility/firebase';
import * as React from 'react';

function EditModal({ handleCloseModal }){

    const [name,setName] = React.useState('');
    const [stock,setStock] = React.useState('');
    const [memo,setMemo] = React.useState('');

    // アイテム追加
    const sanitizeInput = (input) => {
        const tagPattern = /<\/?[^>]+(>|$)/g;
        return !tagPattern.test(input);
    };
      
    const addItem = async () => {
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
            const docRef = await addDoc(collection(db, 'items'), {
            name,
            stock: Number(stock), // 数字で保存
            memo
            });
            await setDoc(docRef, { id: docRef.id }, { merge: true });
            console.log("追加したドキュメントID: ", docRef.id);
            handleCloseModal();
        } catch (e) {
            console.error("エラー:", e);
        }
    };

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
            <TextField
                label="名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="ストック"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />
        </div>
        <div className="inputBottom">
            <TextField 
                className="inputMemo" 
                id="outlined-basic" 
                label="メモ" 
                multiline rows={4} 
                variant="outlined" 
                onChange={(e) => setMemo(e.target.value)}
            />
        </div>
        <Button className="addBtn" variant="contained" onClick={addItem}>
            追加
        </Button>
        <Button className="closeBtn" variant="contained" onClick={handleCloseModal}>
            閉じる
        </Button>
        </Box>
    );
};

export default EditModal;