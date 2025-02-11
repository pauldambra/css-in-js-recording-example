import { Button } from "@mui/material"
import { usePostHog } from "posthog-js/react"
import { useEffect, useState} from 'react'

export function CurrentPostHogReplayURL() {
    const posthog = usePostHog()
    const [replayURL, setReplayURL] = useState<string|null>(null)
    useEffect(() => {
        posthog?.onSessionId((sessionId) => {
            console.log('started new session', sessionId)
            setReplayURL(posthog.get_session_replay_url())
        })
    }, [posthog])
    return <><p>
        current posthog replay url is {replayURL ? <a href={replayURL} target="_blank" rel="noreferrer">{replayURL}</a> : <span>NOT SET</span>}
    </p>
    <Button onClick={() => posthog?.sessionManager?.resetSessionId()}>Reset PostHog session</Button>
    </>

}