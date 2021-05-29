import React from 'react'

export default function DurationSetting({session, type, duration, increaseDuration, decreaseDuration}) {
    return(
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid={`duration-${type}`}>
              {/* TODO: Update this text to display the current focus session duration */}
              {type==="focus" ? "Focus" : "Break"} Duration: {duration >= 10 ? duration : `0${duration}`}:00
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid={`decrease-${type}`}
                onClick={decreaseDuration}
                disabled={session}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid={`increase-${type}`}
                onClick={increaseDuration}
                disabled={session}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
    )
}