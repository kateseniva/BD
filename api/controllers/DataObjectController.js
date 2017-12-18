/**
 * DataObjectController
 *
 * @description :: Server-side logic for managing dataobjects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get(req, res) {
		DataObject.findOne(req.query.id, (err, data) => {
			if (!data) return res.badRequest();

			sails.log.debug(data);

			return res.send(JSON.stringify(data));
		});
	},

	getAll(req, res) {
		DataObject.find((err, data) => {
			if (!data) return res.badRequest();

			sails.log.debug(data);

			return res.send(JSON.stringify(data));
		});
	},

	post(req, res) {
		DataObject.create(req.body).exec((err, data) => {
			if (err) return res.badRequest(err);

			sails.log.debug(data);

			return res.send(JSON.stringify(data));
		});
	},

	put(req, res) {
		DataObject.findOne(req.body.id, (err, data) => {
			if (err) return res.badRequest(err);

			if (!data) return res.badRequest();

			Object.keys(req.body).forEach((key) => data[key] = req.body[key]);

			data.save((err) => {
				if (err) return res.badRequest(err);

				return res.send(JSON.stringify(data));
			});
		});
	},

	deleteObject(req, res) {
		DataObject.destroy({ id: req.body.id }).exec((err) => {
			if (err) return res.badRequest(err);

			return res.ok();
		})
	}
};
