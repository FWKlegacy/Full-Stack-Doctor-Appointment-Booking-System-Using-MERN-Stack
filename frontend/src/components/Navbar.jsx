import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useState } from 'react';
const Navbar = () => {
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState(false);
	const [token, setToken] = useState(true);
	return (
		<div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 gap-14'>
			<img className='w-44 cursor-pointer' src={assets.logo} alt='' onClick={() => navigate('/home')} />
			<ul className=' hidden md:flex items-start gap-5 font-medium'>
				<NavLink to='/home'>
					<li className='py-2'>Home</li>
					<hr className='border-none outline-none h-0.5 bg-primary w-3/5 m- hidden' />
				</NavLink>
				<NavLink to='/doctors'>
					<li className='py-2'>All Doctors</li>
					<hr className='border-none outline-none h-0.5 bg-primary w-3/5 m- hidden' />
				</NavLink>
				<NavLink to='/about'>
					<li className='py-2'>About</li>
					<hr className='border-none outline-none h-0.5 bg-primary w-3/5 m- hidden' />
				</NavLink>
				<NavLink to='/contact'>
					<li className='py-2'>Contact</li>
					<hr className='border-none outline-none h-0.5 bg-primary w-3/5 m- hidden' />
				</NavLink>
			</ul>
			<div className='flex items-center gap-4'>
				{token ? (
					<div className='flex items-center cursor-pointer group relative gap-2 '>
						<img src={assets.profile_pic} alt='' className='rounded-full w-8' />
						<img src={assets.dropdown_icon} alt='' className='w-2.5' />
						<div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
							<div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
								<p className='hover:text-black cursor-pointer' onClick={() => navigate('/myprofile')}>
									My Profile
								</p>
								<p className='hover:text-black cursor-pointer' onClick={() => navigate('/myappointments')}>
									My Appointments
								</p>
								<p className='hover:text-black cursor-pointer' onClick={() => setToken(false)}>
									Logout
								</p>
							</div>
						</div>
					</div>
				) : (
					<div>
						<button className='bg-primary text-white rounded-full md:block hidden px-8 py-3 font-light' onClick={() => navigate('/login')}>
							Create Account
						</button>
					</div>
				)}
				<img className='w-6 md:hidden' src={assets.menu_icon} alt='' onClick={() => setShowMenu(true)} />
				{/*....mobile menu... */}
				<div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'}md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
					<div className='flex items-center justify-between px-5 py-6'>
						<img className='w-36' src={assets.logo} alt='' />
						<img className='w-6' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt='' />
					</div>
					<ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
						<NavLink to='/home' onClick={() => setShowMenu(false)}>
							<p className='px-4 py-2 rounded inline-block'>Home</p>
						</NavLink>
						<NavLink to='/doctors' onClick={() => setShowMenu(false)}>
							<p className='px-4 py-2 rounded inline-block'>All Doctors</p>
						</NavLink>
						<NavLink to='/about' onClick={() => setShowMenu(false)}>
							<p className='px-4 py-2 rounded inline-block'>About</p>
						</NavLink>
						<NavLink to='/contact' onClick={() => setShowMenu(false)}>
							<p className='px-4 py-2 rounded inline-block'>Contact</p>
						</NavLink>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
