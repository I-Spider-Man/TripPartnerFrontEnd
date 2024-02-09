import React from 'react'
import { Divider, Table } from 'antd'
import { useUser } from '../Auth/UserContext'
function UserParticipantDetails() {
  
  const {participantData}=useUser();
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
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Group Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Organizer Name',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Start Date',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'End Date',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Total Participant',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'spot/event',
      dataIndex: 'address',
      key: 'address',
    },
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