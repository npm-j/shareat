import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PastReview from './userPastReview';

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPastReviews() {
    return this.props.reviews.map((review) => {
      return (
        <PastReview
          key={review.id}
          eventName={review.event.eventName}
          date={review.event.startDatetime}
          index={review.id}
          rating={review.rating}
          eventPic={review.event.eventPic}
          content={review.content}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderPastReviews()}
      </div>)
    ;
  }
}

function mapStateToProps(state) {
  return { reviews: state.reviews };
}

ReviewList.propTypes = {
  reviews: PropTypes.array,
};

export default connect(mapStateToProps)(ReviewList);