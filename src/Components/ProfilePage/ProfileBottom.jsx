import React from 'react'
import { Tabs } from 'antd';
import UserOrganizedDetails from './UserOrganizedDetails';
import UserParticipantDetails from './UserParticipantDetails';
import FollowersList from './FollowersList';
import FollowingList from './FollowingList';
import BlockedList from './BlockedList';
import UpdateProfile from './UpdateProfile';
function ProfileBottom() {
  const { TabPane } = Tabs;
  const items = [
    {
      key: '1',
      label: 'Organized Details',
      children: <UserOrganizedDetails/>,
    },
    {
      key: '2',
      label: 'Participant Details',
      children: <UserParticipantDetails/>,
    },
    {
      key: '3',
      label: 'Followers',
      children: <FollowersList/>,
    },
    {
      key: '4',
      label: 'Following',
      children: <FollowingList/>,
    },
    {
      key: '5',
      label: 'Blocked',
      children: <BlockedList/>,
    },
    {
      key: '6',
      label: 'Update Profile',
      children: <UpdateProfile/>,
    },
  ];
  return (
    <Tabs defaultActiveKey="1">
      {items.map((item) => (
        <TabPane tab={item.label} key={item.key}>
          {item.children}
        </TabPane>
      ))}
    </Tabs>
  )
}

export default ProfileBottom
