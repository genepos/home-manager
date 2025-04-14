import * as React from 'react';
import DeletBtn from '../parts/DeleteBtn';
import EditBtn from '../parts/EditBtn';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import DataUtils from '../utility/DataUtils';
import AddBtn from '../parts/AddBtn';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utility/firebase';
import '../css/Items.css';
import "../css/AddBtn.css"


function Items() {
  const test = [];
  // Storeからデータ取得
  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'items'));
    const data = querySnapshot.docs.map(doc => ({
      name: doc.name,
      stock: doc.stock,
      memo: doc.memo,
     ...doc.data()
    }));
    return data;
  };


  const title = 'おうちの在庫';
  const columns = [
    { field: 'name', headerName: '名前', width: 200 },
    { field: 'value', headerName: 'ストック',type: 'number', width: 90 },
    {
      field: 'edit',
      headerName: '更新',
      renderCell: (param) => ( <EditBtn data={param.row}/>),
    },
    {
      field: 'delete',
      headerName: '削除',
      renderCell: (param) => ( <DeletBtn target={param.row.id} data={rows}/>),
    },
    { field: 'memo', headerName: 'メモ', width: 500 },
  ];
  // const rows = DataUtils.createRows(fetchItems());
  //console.log(rows);
  
  const paginationModel = { page: 0, pageSize: 10 };

    return (
      <div className='Items'>
        <div className='title'>
         <h1>{title}</h1>
        </div>
        <div className='menu'>
          <AddBtn/>
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