/**
 * Metadata.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    conceptions: { type: 'array' },
    subjects: { type: 'array' },
    controlObjects: { type: 'array' },
    dataSets : { type: 'array' },
    dataObjects: { type: 'array' }
  }
};
