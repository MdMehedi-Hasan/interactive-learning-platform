import { Icon } from '@iconify/react';
const HeaderBadge = () => {
    return (
        <section>
            <div className="w-8/12 mx-auto bg-white shadow-xl py-10 mb-20 -mt-10 z-50 relative rounded-lg">
                <ul className="flex">
                    <li className='flex flex-col items-center w-4/12'>
                        <Icon icon="ph:student-fill" className='text-5xl text-sky-500'/>
                        <span className='font-bold'>Dynamic Guidline</span></li>
                    <li className='flex flex-col items-center border-x-2 border-sky-500 w-4/12'>
                        <Icon icon="mdi:support" className='text-5xl text-sky-500'/>
                        <span className='font-bold'>Unlimited Support</span></li>
                    <li className='flex flex-col items-center w-4/12'>
                        <Icon icon="carbon:collaborate" className='text-5xl text-sky-500'/>
                        <span className='font-bold'>Quality Service</span></li>
                </ul>
            </div>
        </section>
    );
};

export default HeaderBadge;