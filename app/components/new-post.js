import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newPost() {
      var params = {
        title: this.get('title'),
        contents: this.get('content'),
        image: this.get('image'),
        category: this.get('category'),
        tags: this.get('tags').split(", ")
      };
      this.sendAction('newPost', params);
    }
  }
});
