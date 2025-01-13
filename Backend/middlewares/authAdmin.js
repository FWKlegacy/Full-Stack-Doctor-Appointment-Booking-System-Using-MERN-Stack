import jwt from 'jsonwebtoken';

//admin authentication middleware
const authAdmin = async (req, res, next) => {
	try {
		const { token } = req.headers;
		if (!token) {
			res.json({ success: false, message: 'Not authorized, login please again' });
		}
		const JWT_SECRETS = process.env.JWT_SECRET;
		const tokenDecode = jwt.verify(token, JWT_SECRETS);
		if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
			res.json({ success: false, message: 'Not authorized, login again' });
		}
		next();
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

export default authAdmin;
