import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import DemoButton from './DemoButton';
import { PostHogProvider} from 'posthog-js/react'
import { CurrentPostHogReplayURL } from './CurrentPostHogReplayURL';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    }
  }
}

const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });

  
ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PostHogProvider apiKey="phc_wUeN7Aq8Tj4WhISefWAsuZDyVSEbitrzLOvh7DbVDZA" options={{
        api_host: 'https://internal-t.posthog.com', // your managed reverse proxy domain
        ui_host: 'https://us.posthog.com', // neccessary because you're using a proxy, this way links will point back to PostHog properly
      }}>
        <DemoButton />
        <CurrentPostHogReplayURL />
      </PostHogProvider>
    </ThemeProvider>
  </React.StrictMode>
);