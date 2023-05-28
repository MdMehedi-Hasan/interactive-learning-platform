import { Icon } from '@iconify/react';
const HeaderBadge = () => {
    return (
        <section>
            <div className="w-8/12 mx-auto bg-red-900 py-10 mb-20 -mt-10 z-50 relative rounded-lg">
                <ul className="flex justify-center">
                    <li>
                        <Icon icon="ph:student-fill" />
                        <span>Dynamic Guidline</span></li>
                    <li>
                        <Icon icon="mdi:support" />
                        <span>Unlimited Support</span></li>
                    <li>
                        <Icon icon="carbon:collaborate" />
                        <span>Quality Service</span></li>
                </ul>
            </div>
        </section>
    );
};

export default HeaderBadge;