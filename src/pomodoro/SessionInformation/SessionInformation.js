import React from 'react'

import ProgressBar from './ProgressBar'


export default function SessionInformation ({ session, focusDuration, breakDuration, isTimerRunning}) {
   return ( <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2 align-items-center">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            {session 
            ? <h2 data-testid="session-title">
                {session.label === "Focusing"
                ? `Focusing for ${focusDuration <10 ? `0${focusDuration}` : focusDuration}:00 minutes` 
                : `On Break for ${breakDuration <10 ? `0${breakDuration}` : breakDuration}:00 minutes`}
            </h2> : ""}
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            {session 
            ?<div>
              <p className="lead" data-testid="session-sub-title">
                {new Date(session.timeRemaining * 1000).toISOString().substr(14, 5)} remaining
              </p>
              {!isTimerRunning ? <h3>PAUSED</h3> : ""}
            </div>
            : ""}
          </div>
        </div>
        <div className="row mb-2 align-items-center">
          <div className="col">
            {session 
            ? session.label === "Focusing" 
            ? <ProgressBar timeRemaining={session.timeRemaining} duration={focusDuration}/>
            : <ProgressBar timeRemaining={session.timeRemaining} duration={breakDuration}/>
            :""}
          </div>
        </div>
      </div>
   )
}