import { Button } from '@mui/material';


function DeleteBtn() {

    return (
        <Button
        variant="contained"
        color="error"
        onClick={(e) => {
            console.log('削除click');
            e.stopPropagation();
            e.preventDefault();
        }}>
        削除
        </Button>
    );
  }
  
  export default DeleteBtn;