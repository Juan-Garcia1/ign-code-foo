import React from 'react'

// THUMBNAIL COMPONENT
const Thumbnail = ({ thumbnail, title, duration }) => (
    <div className="thumbnail">
      <a href="!#">
        <img src={thumbnail[0].url} alt={title} />
        {
          duration &&
          <div className="duration">
            <i className="fa fa-play-circle"></i>
            <span className="time">{videoDuration(duration)}</span>
          </div>
        }
      </a>
    </div>
)

function videoDuration(duration) {
  var secs = duration % 60;
  duration = (duration - secs) / 60;
  var mins = duration % 60;
  var hrs = (duration - mins) / 60;
  
  // if hours equals 0 return empty string, else if hours is less than 12 prepend a zero in front of hour. Else, just return hour 
  hrs = hrs === 0 ? '' : hrs < 12 ? `0${hrs}:` : `${hrs}:`
  // if minutes is less than 10, prepend a zero. Else, just return minutes
  mins = mins < 10 ? `0${mins}:` : `${mins}:`
  // if secs is less than 10, prepend a zero. Else, just return seconds
  secs = secs < 10 ? `0${secs}` : `${secs}`

  return `${hrs}${mins}${secs}`;
}

export default Thumbnail