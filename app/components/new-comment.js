import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    newComment() {
      var params = {
        comment: this.get('comment'),
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        post: this.get('post')
      };
      this.sendAction('newComment', params);
    }
  }
});
