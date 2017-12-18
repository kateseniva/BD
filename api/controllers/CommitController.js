/**
 * CommitController
 *
 * @description :: Server-side logic for managing commits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get(req, res) {
		Commit.findOne(req.query.id, (err, commit) => {
			if (!commit) return res.badRequest();

			sails.log.debug(commit);

			return res.send(JSON.stringify(commit));
		});
	},

	getAll(req, res) {
		Commit.find((err, commit) => {
			if (!commit) return res.badRequest();

			sails.log.debug(commit);

			return res.send(JSON.stringify(commit));
		});
	},

	post(req, res) {
		Commit.create(req.body).exec((err, newCommit) => {
			if (err) return res.badRequest(err);

			sails.log.debug(newCommit);

			return res.send(JSON.stringify(newCommit));
		});
	},

	put(req, res) {
		Commit.findOne(req.body.id, (err, commit) => {
			if (err) return res.badRequest(err);

			if (!commit) return res.badRequest();

			Object.keys(req.body).forEach((key) => commit[key] = req.body[key]);

			commit.save((err) => {
				if (err) return res.badRequest(err);

				return res.send(JSON.stringify(commit));
			});
		});
	},

	deleteCommit(req, res) {
		Commit.destroy({ id: req.body.id }).exec((err) => {
			if (err) return res.badRequest(err);

			return res.ok();
		})
	}

};
