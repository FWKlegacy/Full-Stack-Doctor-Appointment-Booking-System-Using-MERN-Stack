import { assets } from '../assets/assets';

const Footer = () => {
	return (
		<div className='md:mx-10'>
			<div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
				{/*left section*/}
				<div>
					<img className='mb-5 w-40' src={assets.logo} alt='' />
					<p className='w-full text-gray-600 md:w-2/3 leading-6'>If you are doctor, you might need to have a couple of these notes that will be issued to the clients seeking your services. This site offers doctors note templates that most of the doctors can make use of. This is a convenient and easy way to come up with as many as doctor’s notes as one needs.</p>
				</div>
				{/*center section*/}
				<div>
					<p className='text-xl font-medium mb-5'>COMPANY</p>
					<ul className='flex flex-col gap-2 text-gray-600'>
						<li>
							<a href='/home' className='text-gray-500 hover:text-blue-700'>
								Home
							</a>
						</li>
						<li>
							<a href='/about' className='text-gray-500 hover:text-blue-700'>
								About Us
							</a>
						</li>
						<li>
							<a href='/contact' className='text-gray-500 hover:text-blue-700'>
								Contact Us
							</a>
						</li>
						<li>
							<a href='/privacy-policy' className='text-gray-500 hover:text-blue-700'>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>
				{/*right section*/}
				<div>
					<p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
					<ul className='flex flex-col gap-2 text-gray-600'>
						<li>+254 741164811</li>
						<li>wanjalawafulabrevian@gmail.com</li>
					</ul>
				</div>
			</div>
			<div>
				<hr />
				<p className='text-sm text-center py-5'>Copyright 2024@ Prescripto. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
