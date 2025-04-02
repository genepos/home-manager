import { Button } from '@mui/material';
import DataUtils from '../DataUtils';

function DeleteBtn({target,data}) {

    return (
        <Button
        variant="contained"
        color="error"
        onClick={(e) => {
            // 削除アクション
            DataUtils.deleteRows(target,data);
            e.stopPropagation();
            e.preventDefault();
        }}>
        削除
        </Button>
    );
  }
  
  export default DeleteBtn;