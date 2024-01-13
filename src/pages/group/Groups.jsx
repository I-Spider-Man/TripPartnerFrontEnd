import React, { useEffect, useState } from 'react';
import { fetchGroupsData } from '../../DataStorage';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Divider, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
function Groups() {
  const [groupData, setGroupData] = useState([]);
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await fetchGroupsData();
        const grpWithId = response.map((grp) => ({
          ...grp,
          id: grp.groupId,
        }));
        setGroupData(grpWithId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGroup();
  }, []);

  const columnData = [
    { field: 'groupId', headerName: 'Group Id', width: 80 },
    { field: 'groupName', headerName: 'Group Name', width: 120 },
    { field: 'organizerName', headerName: 'Organizer Name', width: 130 },
    {
      field: 'event/spot',
      headerName: 'eventName/spotName',
      width:200,
      renderCell: (params) => (
        <div>
          {params.row.eventName ? (
            <>{params.row.eventName}</>
          ) : (
            <>{params.row.spotName}</>
          )}
        </div>
      ),
    },
    { field: 'participantsLimit', headerName: 'Participant Limit',width:150},
    { field: 'participantsCount', headerName: 'Participant Count',width:150 },
    { field: 'groupStatus', headerName: 'Group Status', renderCell: (params) => (
      <span className={`status ${params.value}`}>{params.value}</span>
    )},
    
  ];

  return (
    <div>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="datatable">
          
            <DataGrid
              className="datagrid"
              rows={groupData} 
              columns={columnData}  
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Groups;