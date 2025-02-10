import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import DemoButton from './DemoButton';
import { PostHogProvider} from 'posthog-js/react'

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <PostHogProvider apiKey="phc_wUeN7Aq8Tj4WhISefWAsuZDyVSEbitrzLOvh7DbVDZA" options={{
        api_host: 'https://internal-t.posthog.com', // your managed reverse proxy domain
        ui_host: 'https://us.i.posthog.com', // neccessary because you're using a proxy, this way links will point back to PostHog properly
      }}>
        <DemoButton />
      </PostHogProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);