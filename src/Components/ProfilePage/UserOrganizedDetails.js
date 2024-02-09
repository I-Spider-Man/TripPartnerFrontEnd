import { Divider, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useUser } from '../Auth/UserContext'
import { Button } from '@mui/material';
import { fetchOrganizedGroups } from '../Files/Organzier_Details';

function UserOrganizedDetails() {
  const {organizerData}=useUser();
  const [dataSource,setDataSource]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      const response=await fetchOrganizedGroups(organizerData.userId);
      setDataSource(response);
    }
    fetchData();
  },[])
  
  
  const columns = [
    {
      title: 'Group Name',
      dataIndex: 'groupName',
      key: 'name',
    },
    {
      title: 'Organizer Name',
      render: (record) => record.organizerData?.userData?.userName,
      key: 'address',
    },
    {
      title: 'Start Date',
      dataIndex: 'dateFrom',
      key: 'age',
    },
    {
      title: 'End Date',
      dataIndex: 'dateTo',
      key: 'address',
    },
    {
      title: 'Total Participant',
      dataIndex: 'participantsLimit',
      key: 'address',
    },
    {
      title: 'spot/event',
      render: (record)=>record.eventName? record.eventName:record.spotName,
      key: 'address',
    },
    {
      title: 'Status',
      dataIndex:'groupStatus',
      key: 'groupStatus',
    }
  ]
  return (
    <div style={{display:'flex',flexDirection:'row',height:'100%'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        {organizerData? organizerData.organizedCount: "You have'nt organized any group."}
      </div>
      <Divider type='vertical' style={{borderWidth:'3px'}}/>
      <div>
      <Table dataSource={dataSource} columns={columns} style={{width:'100%', height:'100%'}}/>;
      </div>
    </div>
  )
}

export default UserOrganizedDetails