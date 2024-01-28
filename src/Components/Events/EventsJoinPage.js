import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import {Group_details, getGroup} from '../Files/Group_Details';
import { participantJoining } from '../Files/Participant_Details';

function EventsJoinPage(props) {
  const { onClose, open, eventName, spotName, userId, ...other } = props;
  const [groupDetails,setGroupDetails]=React.useState([{}]);
  const radioGroupRef = React.useRef(null);
  const [joinDetails,setjoinDetails]=React.useState({})
  React.useEffect(()=>{
    const fetchGroup=async()=>{
      const groups=await getGroup(eventName,spotName);
      setGroupDetails(groups);
    }
    fetchGroup();
  },[eventName,spotName])
  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
  };

const handleJoin=(e)=>{
  setjoinDetails({
    ...joinDetails,
    userId:userId,
    groupId:e.target.value
  });
  Participation();
}
const Participation=async()=>{
  const response=await participantJoining(joinDetails);
  onClose();
}
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435, backgroundColor: '#383838', color:'white' } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>Groups List</DialogTitle>
        {groupDetails.map((grp)=>(<DialogContent dividers style={{display:'flex',justifyContent:'space-between'}}>{grp.groupName} <Button variant='contained' name="groupId" value={grp.groupId} onClick={(e)=>handleJoin(e)}> join </Button></DialogContent>))}
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={()=>handleOk()}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

EventsJoinPage.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default EventsJoinPage;