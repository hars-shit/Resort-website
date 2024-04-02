import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import { keyframes } from '@mui/system';

const inAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const outAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export default function Alert({open,setOpen}) {

  const animationDuration = 600;



  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
   <Snackbar
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  open={open}
  onClose={handleClose}
  autoHideDuration={4000}
  animationDuration={animationDuration}
  sx={{
    top: { xs: '16px', sm: '24px' }, // Adjusts the top spacing for small screens and up
    ...(open && {
      animation: `${inAnimation} ${animationDuration}ms forwards`,
    }),
    ...(!open && {
      animation: `${outAnimation} ${animationDuration}ms forwards`,
    }),
    // Ensure the snackbar is centered horizontally in the page
    '& .MuiSnackbarContent-root': {
      flexGrow: 0, // Prevents the snackbar from stretching full width
    },
  }}
>
  I love this animation!
</Snackbar>

    </div>
  );
}
