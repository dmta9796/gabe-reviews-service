import React from 'react';

import reviewPropTypes from '../../../proptypes/review';

import ReviewUserInfo from './ReviewUserInfo';
import ReviewContent from './ReviewContent';
import ReviewLinks from './ReviewLinks';

import { review__single__wrapper } from './css/review.scss';

const ReviewSingle = ({ review }) => (
  <div className={review__single__wrapper}>
    <ReviewUserInfo user={review.user_id} />
    <ReviewContent review={review} />
    <ReviewLinks review={review} />
  </div>
);

ReviewSingle.propTypes = {
  review: reviewPropTypes.isRequired,
};

export default ReviewSingle;