import React, { Component } from 'react'
import moment from 'moment'

// CONTENT COMPONENT
class Content extends Component {
  state = {
    ignComments: ({"count":10,"content":[{"id":"5a9c4cf4e4b0d178e9f0c6b1","count":348},{"id":"5a95a703e4b0d178e9f0c226","count":204},{"id":"5a98a4eae4b0087dae287efa","count":0},{"id":"5a985c22e4b0d178e9f0c495","count":0},{"id":"5a9bb326e4b0d178e9f0c685","count":228},{"id":"051f6f28bb4ffb6c2ee76619224466cf","count":0},{"id":"dfe25bef8e63a476e6a70e1d77bb2e6b","count":73},{"id":"1c71674a4e8c23edf683725d8c417118","count":2},{"id":"8431303a5922397397dc090d93c64b29","count":0},{"id":"03ff16c8603539795fd3f9a4835e6bba","count":4}]})
  }

  render() {
    const { ignComments } = this.state
    const commentCount = ignComments.content.filter(c => c.id === this.props.id).map(c => c.count)
    return (
      <div className="content">
        <div className="content-info">
          <Posted post={this.props.post} />
          <span style={{marginLeft: '5px', marginRight: '5px'}}>-</span>
          <Comments comments={commentCount} />
        </div>
        <p><a href="!#">{this.props.title}</a></p>
      </div>
    )
  }
}


const Posted = ({ post }) => (
  <span>{moment(post).fromNow()}</span>
)

const Comments = ({ comments }) => (
  <span><i className="fa fa-comment-o"></i>{comments}</span>
)

export default Content