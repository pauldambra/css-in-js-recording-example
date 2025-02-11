import * as React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

const DangerButton = styled(LoadingButton)(({ theme }) => ({
  '&:active': {
    backgroundColor: theme.status.danger,
  },
  '&.MuiLoadingButton-loading': {
    backgroundColor: theme.status.danger,
  }
}));

export default function DemoButton() {
  const [loading, setLoading] = React.useState(false);
  const [clicks, setClicks] = React.useState(0);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return <DangerButton variant="contained" loading={loading} endIcon={<SendIcon />} onClick={() => {
    console.log('clicked');
    setLoading(true);
    setClicks(clicks + 1);
  }}>Click me to cause some mutations on the page. Already clicked {clicks} times</DangerButton>;
}
