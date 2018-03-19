import React from 'react'
import Article from './Article'
import LoadMoreBtn from './LoadMoreBtn'

// ARTICLES SECTION
const Articles = ({ articles }) => {
  return (
    <section>
      {
        articles.map(article => <Article key={article.contentId} {...article} /> )
      }
      <LoadMoreBtn />
    </section>)
}

export default Articles