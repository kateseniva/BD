/**
 * SubjectController
 *
 * @description :: Server-side logic for managing subjects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get(req, res) {
		Subject.findOne(req.query.id, (err, subject) => {
			if (!subject) return res.badRequest();

			sails.log.debug(subject);

			return res.send(JSON.stringify(subject));
		});
	},

	getAll(req, res) {
		Subject.find((err, subject) => {
			if (!subject) return res.badRequest();

			sails.log.debug(subject);

			return res.send(JSON.stringify(subject));
		});
	},

	post(req, res) {
		Subject.create(req.body).exec((err, subject) => {
			if (err) return res.badRequest(err);

			sails.log.debug(subject);

			return res.send(JSON.stringify(subject));
		});
	},

	put(req, res) {
		Subject.findOne(req.body.id, (err, subject) => {
			if (err) return res.badRequest(err);

			if (!subject) return res.badRequest();

			Object.keys(req.body).forEach((key) => subject[key] = req.body[key]);

			subject.save((err) => {
				if (err) return res.badRequest(err);

				return res.send(JSON.stringify(subject));
			});
		});
	},

	deleteSubject(req, res) {
		Subject.destroy({ id: req.body.id }).exec((err) => {
			if (err) return res.badRequest(err);

			return res.ok();
		})
	}
};
