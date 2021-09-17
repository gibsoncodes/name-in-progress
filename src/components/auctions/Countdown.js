import React from 'react';
import { useTimer } from 'react-timer-hook';
 
const Countdown = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
 
  let displayText = (<React.Fragment><span>{days !== 0 ? `${days} days` : null}</span><span>{hours !== 0 ? `${hours} hours` : null}</span>:<span>{hours <= 12 ? minutes : null}</span>:<span>{hours <= 1 ? seconds : null}</span></React.Fragment>);

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
          {displayText}
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
    </div>
  );
}

export default Countdown;