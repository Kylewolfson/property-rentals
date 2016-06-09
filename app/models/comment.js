import DS from 'ember-data';
import moment from 'moment';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
comment: DS.attr(),
date: moment().format('MMMM Do YYYY, h:mm:ss a'),
post: DS.belongsTo('post', {async: true})
});
