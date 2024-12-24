import * as React from 'react';
import { TextField, Button } from '@mui/material';
import DeletBtn from '../parts/DeleteBtn'
import EditBtn from '../parts/EditBtn'
import { DataGrid, GridColDef, GridRowsProp, GridToolbar, GridEditModes} from '@mui/x-data-grid';

import '../css/Items.css';

function Items() {
    const title = 'おうちの在庫';
  
    const columns = [
        { field: 'id', headerName: 'ID', type: 'number', width: 70 },
        { field: 'name', headerName: '名前', width: 200 },
        { field: 'value', headerName: 'ストック',type: 'number', width: 90 },
        {
          field: 'edit',
          headerName: '更新',
          renderCell: () => ( <EditBtn/>),
         },
        {
          field: 'delete',
          headerName: '削除',
          renderCell: () => ( <DeletBtn/>),
         },
        { field: 'memo', headerName: 'メモ', width: 500 },
    ];
    
    const rows = [
        { id: 1, name: 'シャンプー', value: 2, memo: '残り少ない'},
        { id: 2, name: 'リンス', value: 3, memo: ''},
        { id: 3, name: '歯磨き粉', value: 1, memo: 'かわにゃ'},
        { id: 4, name: '洗剤', value: 3, memo: ''},
        { id: 5, name: 'おむつ', value: 10, memo: ''},
    ];
  
    const paginationModel = { page: 0, pageSize: 10 };

    return (
      <div className='Items'>
        <div className='title'>
         <h1>{title}</h1>
        </div>

        <div className='contents'>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[20, 100]}
            sx={{ border: 0 }}
            editMode='row'
            slots={{ toolbar: GridToolbar }}
        />
        </div>

      </div>
    );
  }
  
  export default Items;