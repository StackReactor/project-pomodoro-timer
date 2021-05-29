import React from 'react'

export default function ProgressBar({ timeRemaining, duration }) {
    return (<div className="progress" style={{ height: "20px" }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={`${100-((timeRemaining/(duration* 60)) * 100) }`} // TODO: Increase aria-valuenow as elapsed time increases
                    style={{ width: `${100-((timeRemaining/(duration* 60)) * 100) }%`}}// TODO: Increase width % as elapsed time increases
                />
                
    </div>)
}