import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
	const { doctors } = useContext(AppContext);

	return (
		<div>
			<p className='mt-12 pb-3 font-medium text-zinc-700  border-b'>My Appointments</p>
			<div>
				{doctors.slice(0, 3).map((item, index) => (
					<div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
						<div>
							<img className='w-32 bg-indigo-50' src={item.image} alt='' />
						</div>
						<div className='flex-1 text-sm text-zinc-600'>
							<p className='text-neutral-800 font-semibold'>{item.name}</p>
							<p>{item.speciality}</p>
							<p className='text-zinc-700 font-medium mt-1'>Address:</p>
							<p className='text-xs'>{item.address.line1}</p>
							<p className='text-xs'>{item.address.line2}</p>
							<p className='mt-1 text-sm'>
								<span className='text-sm font-medium text-neutral-700'>Date & Time:</span>
								25, July, 2024 | 8:30pm
							</p>
						</div>
						<div></div>
						<div className='flex flex-col gap-2 justify-end'>
							<button className='text-sm text-center text-stone-500 sm:w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
							<button className='text-sm text-center text-stone-500 sm:w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyAppointments;
