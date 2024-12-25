import * as React from 'react';
import DeletBtn from '../parts/DeleteBtn';
import EditBtn from '../parts/EditBtn';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import DataUtils from '../DataUtils';
import '../css/Items.css';
import zaikoData from "../zaiko_data/zaiko.json"
import AddBtn from '../parts/AddBtn';
import "../css/AddBtn.css"

function Items() {

    const title = 'おうちの在庫';
    const columns = [
        { field: 'id', headerName: 'ID', type: 'number', width: 70 },
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
          renderCell: () => ( <DeletBtn/>),
         },
        { field: 'memo', headerName: 'メモ', width: 500 },
    ];

    const rows = DataUtils.createRows(zaikoData);
  
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