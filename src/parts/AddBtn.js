import { Button } from '@mui/material';
import { useState } from "react";
import { Modal } from '@mui/material';
import AddModal from "../parts/AddModal";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddBtn() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);
    return (
        <>
            <Button
            className='add'
            onClick={handleOpenModal}>
            <AddCircleIcon
                sx={{ fontSize: 72 }}/>
            </Button>

            <Modal open={isOpen} onClose={handleCloseModal}>
                <AddModal handleCloseModal={handleCloseModal} />
            </Modal>
        </>
    );
  }

  export default AddBtn;