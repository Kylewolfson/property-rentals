import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    newPost() {
      var params = {
        title: this.get('title'),
        contents: this.get('content'),
        image: this.get('image'),
        category: this.get('category'),
        tags: this.get('tags').split(", "),
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      };
      this.sendAction('newPost', params);
    }
  }
});
