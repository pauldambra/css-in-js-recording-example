import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function DemoButton() {
  const [loading, setLoading] = React.useState(false);
  const [clicks, setClicks] = React.useState(0);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return <Button variant="contained" loading={loading} endIcon={<SendIcon />} onClick={() => {
    console.log('clicked');
    setLoading(true);
    setClicks(clicks + 1);
  }}>Click me to cause some mutations on the page. Already clicked {clicks} times</Button>;
}
