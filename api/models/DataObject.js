/**
 * DataObject.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    metadataId: { type: 'string' },

    name : { type: 'string' },

    dataTableId : { type: 'string' },

    commits : { type: 'array' },

    dataSetId: { type: 'string' }
  }
};
