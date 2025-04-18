import { Button } from "@mui/material";

function EditBtn({ data, onEdit }) {
  return (
    <Button
      variant="contained"
      onClick={() => onEdit(data)} // ← 親の関数呼ぶ！
    >
      編集
    </Button>
  );
}

export default EditBtn;