import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Alert({open,setOpen}) {



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" sx={{color:'#f6ac0f'}}/>
      </IconButton>
    </React.Fragment>
  );

  return (
    <div style={{background:'#0f1a2c'}}>
     <Snackbar 
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="Message Send Successfully !"
  action={action}
  sx={{ '& .MuiPaper-root': { backgroundColor: '#0f1a2c' } }} 
/>

    </div>
  );
}