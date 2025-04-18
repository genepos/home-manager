import * as React from 'react';
import { useState, useEffect } from "react";
import DeletBtn from '../parts/DeleteBtn';
import EditBtn from '../parts/EditBtn';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utility/firebase';
import '../css/Items.css';
import { Modal } from '@mui/material';
import AddModal from "../parts/AddModal";
import EditModal from "../parts/EditModal";
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Items() {

  // 状態管理
  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const handleOpenModal = () => setIsOpen(true);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  /** モーダル制御 */
  const handleCloseModal = async () => {
    setIsOpen(false);
    // モーダル閉じた後、データを再取得して画面を更新
    const data = await fetchItems();
    setRows(data);
  };

  /** 編集モーダル制御 */ 
  const handleOpenEditModal = (data) => {
  // モーダルに渡すデータ
  setEditData(data);
  setIsEditOpen(true);
  };

  /** 編集後再取得制御 */
  const handleCloseEditModal = async () => {
    setIsEditOpen(false);
    const updatedItems = await fetchItems();
    setRows(updatedItems);
  };

  /** ボタン押下制御 */
  const handleFetchData = async () => {
    // データを再取得して画面を更新
    const data = await fetchItems();
    setRows(data);
  };

  /** Storeからデータ取得 */
  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'items'));
    const data = querySnapshot.docs.map(doc => {
      const docData = doc.data();
      return {
        id : docData.id,
        name: docData.name,
        stock: docData.stock,
        memo: docData.memo,
        ...docData
      };
    });
    return data;
  };

  const title = 'おうちの在庫';
  const columns = [
    { field: 'name', headerName: '名前', width: 200 },
    { field: 'stock', headerName: 'ストック', width: 90 },
    {
      field: 'edit',
      headerName: '更新',
      renderCell: (params) => (
        <EditBtn
        data={params.row}
        onEdit={handleOpenEditModal}
      />
      ),
    },
    {
      field: 'delete',
      headerName: '削除',
      renderCell: (param) => ( 
      <DeletBtn 
        targetId={param.row.id} 
        onDeleted={async () => {
        const data = await fetchItems();
        setRows(data);
      }}/>),
    },
    { field: 'memo', headerName: 'メモ', width: 500 },
  ];

  // データ取得
  useEffect(() => {
    // ここがマウント時に1回実行される
    fetchItems().then(data => {
      setRows(data);
    });
  }, []); // ← 空配列で「初回だけ」に限定
  
  const paginationModel = { page: 0, pageSize: 10 };

    return (
      <div className='Items'>
        <div className='title'>
         <h1>{title}</h1>
        </div>
        <div className='menu'>
          <Button
            className='add'
            onClick={handleOpenModal}>
            <AddCircleIcon
                sx={{ fontSize: 72 }}/>
          </Button>
          <Modal open={isOpen} onClose={handleCloseModal}>
                <AddModal handleCloseModal={handleCloseModal} />
          </Modal>
          <Modal open={isEditOpen} onClose={handleCloseEditModal}>
            <EditModal data={{ data: editData }} handleCloseModal={handleCloseEditModal} />
          </Modal>
        </div>
        <div className='contents'>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[20, 100]}
            sx={{ border: 0 }}
            slots={{ toolbar: GridToolbar }}
        />
        </div>

      </div>
    );
}
  export default Items;