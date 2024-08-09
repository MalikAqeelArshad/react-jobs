import vue from '@/assets/icons/vue.svg';
import nuxt from '@/assets/icons/nuxt.svg';
import next from '@/assets/icons/next.svg';
import react from '@/assets/icons/react.svg';
import { FaCaretDown, FaReact, FaVuejs } from 'react-icons/fa';
import { TbBrandNuxt, TbBrandNextjs } from 'react-icons/tb';

const DropdownMenu = () => {
	const preventDefault = (e) => e.preventDefault();

	return (
		<div className='flex mx-2'>
			<div className='group relative inline-block text-left'>
				<button
					className='p-2 text-white rounded-md'>
					More <FaCaretDown className='inline text-lg mb-1 ml-1' />
				</button>
				<div className="hidden group-hover:block overflow-hidden origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 animate-fadeIn">
					<a
						href='https://vue-mongodb.vercel.app' target="_blank"
						className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
						<img className="inline-block h-5 mb-1 mr-1" src={vue} alt="Vue" /> Vue
					</a>
					<a
						href='' onClick={preventDefault} disabled
						className='block px-4 py-2 text-gray-300 pointer-events-none'>
						<img className="inline-block h-5 mb-1 mr-1" src={react} alt="React" /> React
					</a>
					<a
						href='' onClick={preventDefault} target="_blank"
						className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
						<img className="inline-block h-5 mb-1 mr-1" src={nuxt} alt="Nuxt" /> Nuxt
						<small className="text-gray-300 ml-1">coming soon</small>
					</a>
					<a
						href='' onClick={preventDefault} target="_blank"
						className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
						<img className="inline-block h-5 mb-1 mr-1" src={next} alt="Next" /> Next
						<small className="text-gray-300 ml-1">coming soon</small>
					</a>
				</div>
			</div>
		</div>
	);
};
export default DropdownMenu;