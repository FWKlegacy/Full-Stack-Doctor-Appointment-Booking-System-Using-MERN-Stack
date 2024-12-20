import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctorModel.js';

//API for adding doctor

const addDoctor = async (req, res) => {
	try {
		const { name, email, password, address, speciality, degree, about, experience, fees } = req.body;
		const imageFile = req.file;
		//Checking for all data not add doctor
		if (name || !email || !password || !address || !speciality || !degree || !about || !experience || !fees) {
			return res.json({ success: false, message: 'Missing Details' });
		}

		//validating email format
		if (!validator.isEmail(email)) {
			return res.json({ success: false, message: 'Please enter a Valid email' });
		}
		//validating strong password
		if (password.length < 8) {
			return res.json({ success: false, message: 'Please enter a strong password' });
		}
		//hashing doctor password

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		//upload image to cloudinary
		const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
		const imageUrl = imageUpload.secure_url;

		const doctorData = {
			name,
			email,
			image: imageUrl,
			password: hashedPassword,
			speciality,
			degree,
			about,
			fees,
			experience,
			address: JSON.parse(address),
			date: Date.now(),
		};

		const newDoctor = new doctorModel(doctorData);
		await newDoctor.save();
		res.json({ success: true, message: 'Doctor Added' });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};
export default addDoctor;
