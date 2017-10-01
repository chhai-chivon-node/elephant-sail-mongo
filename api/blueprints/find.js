/**
* Module dependencies
*/
_ = require('lodash');

/**
* Find Records
*
*  get   /:modelIdentity
*   *    /:modelIdentity/find
*
* An API call to find and return model instances from the data adapter
* using the specified criteria.  If an id was specified, just the instance
* with that unique id will be returned.
*
* Optional:
* @param {Object} where       - the find criteria (passed directly to the ORM)
* @param {Integer} limit      - the maximum number of records to send back (useful for pagination)
* @param {Integer} skip       - the number of records to skip (useful for pagination)
* @param {String} sort        - the order of returned records, e.g. `name ASC` or `age DESC`
* @param {String} callback - default jsonp callback param (i.e. the name of the js function returned)
*/

module.exports = function findRecords(req, res) {

 // Look up the model
 var Model = ActionUtilityService.util.parseModel(req);


 // If an `id` param was specified, use the findOne blueprint action
 // to grab the particular instance with its primary key === the value
 // of the `id` param.   (mainly here for compatibility for 0.9, where
 // there was no separate `findOne` action)
 if (ActionUtilityService.util.parsePk(req)) {
   return require('./findOne')(req, res);
 }

 // Lookup for records that match the specified criteria
 var query = Model.find()
   .where(ActionUtilityService.util.parseCriteria(req))
   .limit(ActionUtilityService.util.parseLimit(req))
   .skip(ActionUtilityService.util.parseSkip(req))
   .sort(ActionUtilityService.util.parseSort(req))
   .paginate({page: ActionUtilityService.util.parsePage(req), limit: ActionUtilityService.util.parsePerPage(req)})
 query = ActionUtilityService.util.populateRequest(query, req);
 query.then((matchingRecords) => {
   if (req._sails.hooks.pubsub && req.isSocket) {
     Model.subscribe(req, matchingRecords);
     if (req.options.autoWatch) {
       Model.watch(req);
     }
     // Also subscribe to instances of all associated models
     _.each(matchingRecords, function (record) {
       ActionUtilityService.util.subscribeDeep(req, record);
     });
   }

   Model.count().then((found) => {
     res.set('Total', found)
     res.ok(matchingRecords);
   })
 }).catch((err) => {
   if (err) return res.serverError(err);
 })
};