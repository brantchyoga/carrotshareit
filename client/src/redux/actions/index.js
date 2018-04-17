import { LIFT_POST_DATA } from '../constants/action-types';

export const liftPostData = data => (
  {
    type: LIFT_POST_DATA,
    payload: data
  }
)
