/**
 * MetadataController
 *
 * @description :: Server-side logic for managing metadatas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get(req, res) {
		Metadata.findOne(req.query.id, (err, metadata) => {
			if (!metadata) return res.badRequest();

			sails.log.debug(metadata);

			return res.send(JSON.stringify(metadata));
		});
	},

	getAll(req, res) {
		Metadata.find((err, metadata) => {
			if (!metadata) return res.badRequest();

			sails.log.debug(metadata);

			return res.send(JSON.stringify(metadata));
		});
	},

	post(req, res) {
		Metadata.create(req.body).exec((err, metadata) => {
			if (err) return res.badRequest(err);

			sails.log.debug(metadata);

			return res.send(JSON.stringify(metadata));
		});
	},

	put(req, res) {
		Metadata.findOne(req.body.id, (err, metadata) => {
			if (err) return res.badRequest(err);

			if (!metadata) return res.badRequest();

			Object.keys(req.body).forEach((key) => metadata[key] = req.body[key]);

			metadata.save((err) => {
				if (err) return res.badRequest(err);

				return res.send(JSON.stringify(metadata));
			});
		});
	},

	deleteMetadata(req, res) {
		Metadata.destroy({ id: req.body.id }).exec((err) => {
			if (err) return res.badRequest(err);

			return res.ok();
		})
	}
};
