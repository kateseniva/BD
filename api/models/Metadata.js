/**
 * Metadata.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    conceptions: { type: 'array' },
    subjects: {
      collection: 'subject',
      via: 'metadata'
    },

    controlObjects: { type: 'array' },

    dataSets : {
      collection: 'dataSet',
      via: 'metadata'
    },

    dataObjects: {
      collection: 'dataObject',
      via: 'metadata'
    }
  }
};
