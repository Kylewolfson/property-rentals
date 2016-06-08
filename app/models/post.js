import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  contents: DS.attr(),
  title: DS.attr(),
  category: DS.attr(),
  tags: DS.attr()
});
