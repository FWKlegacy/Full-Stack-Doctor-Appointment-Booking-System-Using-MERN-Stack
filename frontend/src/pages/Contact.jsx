import { assets } from '../assets/assets';

const Contact = () => {
	return (
		<div>
			<div className='text-center text-gray-500 pt-10 text-2xl'>
				<p>
					CONTACT <span className='text-gray-700 font-semibold'>US</span>
				</p>
			</div>
			<div className='my-10 flex flex-col justify-center gap-10 mb-28 md:flex-row text-sm'>
				<img className='w-full md:max-w-[360px]' src={assets.contact_image} alt='' />
				<div className='flex flex-col justify-center items-start gap-6'>
					<p className='font-semibold text-gray-600 text-lg'>OUR OFFICE</p>
					<p className='text-gray-500'>
						7458 Wabera Street <br />
						Suite 340, Nairobi, Kenya
					</p>
					<p className='text-gray-500'>
						(TELL): +254 741164812 <br />
						Email: wanjalawafulabrave@gmail.com
					</p>
					<p className='text-lg font-semibold text-gray-600'>Careers at PRESCRIPTO</p>
					<p className='text-gray-500'>Learn more about our teams and job opennings</p>
					<button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
