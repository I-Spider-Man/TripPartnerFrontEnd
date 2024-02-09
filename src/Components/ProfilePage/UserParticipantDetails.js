import React, { useEffect, useState } from 'react'
import { Divider, Table } from 'antd'
import { useUser } from '../Auth/UserContext'
import { fetchParticipatedGroups } from '../Files/Participant_Details';
function UserParticipantDetails() {
  
  const {participantData}=useUser();
  const [dataSource,setDataSource]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      const response=await fetchParticipatedGroups(participantData.userId);
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
        {participantData? participantData.participationCount: "You have'nt participated in any group."}
      </div>
      <Divider type='vertical' style={{borderWidth:'3px'}}/>
      <div>
      <Table dataSource={dataSource} columns={columns} style={{width:'100%', height:'100%'}}/>;
      </div>
    </div>
  )
}

export default UserParticipantDetails