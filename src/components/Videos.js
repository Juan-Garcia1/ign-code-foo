import React from 'react'
import Article from './Article'
import LoadMoreBtn from './LoadMoreBtn'

// VIDEOS SECTION
const Videos = ({ videos }) => (
    <section>
      {
        videos.map(video => <Article key={video.contentId} {...video}/>)
      }
      <LoadMoreBtn />
    </section>
)

export default Videos