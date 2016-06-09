import Ember from 'ember';

export function commentCount(params/*, hash*/) {
  return params.comments;
}

export default Ember.Helper.helper(commentCount);
