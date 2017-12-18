/**
 * DataSetControllerController
 *
 * @description :: Server-side logic for managing datasetcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get(req, res) {
		DataSet.findOne(req.query.id, (err, set) => {
			if (!set) return res.badRequest();

			sails.log.debug(set);

			return res.send(JSON.stringify(set));
		});
	},

	getAll(req, res) {
		DataSet.find((err, set) => {
			if (!set) return res.badRequest();

			sails.log.debug(set);

			return res.send(JSON.stringify(set));
		});
	},

	post(req, res) {
		sails.log.debug(req.body);

		DataSet.create(req.body).exec((err, newSet) => {
			if (err) return res.badRequest(err);

			return res.ok();
		});
	},

	put(req, res) {
		DataSet.findOne(req.body.id, (err, set) => {
			if (err) return res.badRequest(err);

			if (!set) return res.badRequest();

			Object.keys(req.body).forEach((key) => set[key] = req.body[key]);

			set.save((err) => {
				if (err) return res.badRequest(err);

				return res.ok();
			});
		});
	},

	deleteSet(req, res) {
		DataSet.destroy({ id: req.body.id }).exec((err) => {
			if (err) return res.badRequest(err);

			return res.ok();
		})
	}
};
