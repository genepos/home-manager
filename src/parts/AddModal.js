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
    const addItem = async () => {
        try {
          const docRef = await addDoc(collection(db, 'items'), {
            name: name,
            stock: stock,
            memo: memo
          });
          // docRef.id を使って、id フィールドを追加！
          await setDoc(docRef, { id: docRef.id }, { merge: true });
          console.log('追加したドキュメントID: ', docRef.id);
        } catch (e) {
          console.error('エラー: ', e);
        }
        handleCloseModal();
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
            <TextField className="inputName" id="outlined-basic" label="名前" variant="outlined" onChange={(e) => setName(e.target.value)}/>
            <TextField className="inputStock" id="outlined-basic" label="ストック" variant="outlined" onChange={(e) => setStock(e.target.value)}/>
        </div>
        <div className="inputBottom">
            <TextField className="inputMemo" id="outlined-basic" label="メモ" multiline rows={4} variant="outlined" onChange={(e) => setMemo(e.target.value)}/>
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