/**
 * ConceptionController
 *
 * @description :: Server-side logic for managing conceptions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get(req, res) {
		Conception.findOne(req.query.id, (err, conception) => {
			if (!conception) return res.badRequest();

			sails.log.debug(conception);

			return res.send(JSON.stringify(conception));
		});
	},

	getAll(req, res) {
		Conception.find((err, conception) => {
			if (!conception) return res.badRequest();

			sails.log.debug(conception);

			return res.send(JSON.stringify(conception));
		});
	},

	post(req, res) {
		Conception.create(req.body).exec((err, newConception) => {
			if (err) return res.badRequest(err);

			sails.log.debug(newConception);

			return res.send(JSON.stringify(newConception));
		});
	},

	put(req, res) {
		Conception.findOne(req.body.id, (err, conception) => {
			if (err) return res.badRequest(err);

			if (!conception) return res.badRequest();

			Object.keys(req.body).forEach((key) => conception[key] = req.body[key]);

			conception.save((err) => {
				if (err) return res.badRequest(err);

				return res.send(JSON.stringify(conception));
			});
		});
	},

	deleteConception(req, res) {
		Conception.destroy({ id: req.body.id }).exec((err) => {
			if (err) return res.badRequest(err);

			return res.ok();
		})
	}
};
