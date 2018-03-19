import React from 'react'
import Thumbnail from './Thumbnail'
import Content from './Content'


// SINGLE ARTICLE
const Article = (video ) => {
  return (
    <div className="article">
      <Thumbnail thumbnail={video.thumbnails} title={video.metadata.title} duration={video.metadata.duration} />
      <Content title={video.metadata.title} post={video.metadata.publishDate} id={video.contentId} />
    </div>)
}

export default Article