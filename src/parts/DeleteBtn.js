// DeleteBtn.jsx
import { Button } from '@mui/material';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../utility/firebase';

function DeleteBtn({ targetId, onDeleted }) {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'items', targetId));
      console.log('削除成功');
      // 親に通知してデータ再取得させる
      if (onDeleted) onDeleted();
    } catch (error) {
      console.error('削除失敗:', error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleDelete}>
      削除
    </Button>
  );
}

export default DeleteBtn;
