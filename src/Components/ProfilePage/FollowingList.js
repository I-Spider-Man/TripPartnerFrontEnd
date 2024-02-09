import { Divider, Table } from 'antd'
import React, { useState } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Button } from '@mui/material';
function FollowingList() {
  const [FollowingList,setFollowingList]=useState([]);
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      button: <Button> view</Button>
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      dataIndex: 'button'
    }
  ]
  return (
    <div style={{display:'flex',flexDirection:'row',height:'100%',justifyContent:'space-evenly'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'20%'}}>
        {FollowingList?.length}
      </div>
      <Divider type='vertical' style={{borderWidth:'3px'}}/>
      <div>
      <Table dataSource={dataSource} columns={columns} style={{width:'100%', height:'100%'}}/>;
      </div>
    </div>
  )
}

export default FollowingList