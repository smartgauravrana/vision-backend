const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.findUsername = (req, res) => {
	if (req.body.username) {
		User.findOne({'username': req.body.username}, (err, docs) => {
			if (err) {
				console.log(err);
			}
			else if (docs == null) {
				res.json({success: true, message: 'Username available'});
			}
			else {
				res.json({success: false, message: 'Username not available'});
			}
		})
	}
	else {
		res.json({success: false, message: 'Username not provided'});
	}
}


module.exports.updateUsername = (req, res) => {
	if (req.body.username) {
		if (req.body.id) {
			User.findOneAndUpdate({'_id': req.body.id}, {$set: {'username': req.body.username}}, {new: true}, (err, docs) => {
				if (err) {
					console.log(err);
				}
				else {
					res.json({success: true, message: 'Username updated successfully'});
				}
			})
		}
		else {
			res.json({success: false, message: 'Id not provided'});
		}
	}
	else {
		res.json({success: false, message: 'Username not provided'});
	}
};

module.exports.getUserDetails = (req, res) => {
	const userId = req.params.userId;

	User
		.findById(userId)
		.populate('posts')
		.then(user => {
			if (!user) {
				res.status(404).json({message: 'user does not exist'});
			} else {
				res.status(200).json(user);
			}
		})
		.catch(err => console.log(err));
	;
};