import { Button } from '@mui/material';
import { useState } from "react";
import { Modal } from '@mui/material';
import EditModal from "../parts/EditModal";

function EditBtn(data) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);
    return (
        <>
            <Button
            variant="contained"
            onClick={handleOpenModal}>
            更新
            </Button>

            <Modal open={isOpen} onClose={handleCloseModal}>
                <EditModal data={data} handleCloseModal={handleCloseModal} />
            </Modal>
        </>
    );
  }

  export default EditBtn;