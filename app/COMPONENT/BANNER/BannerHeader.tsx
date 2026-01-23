

import { ArrowBigRight } from 'lucide-react';
import { bbgBartle, smoochSans } from '@/app/FONTS/fonts';
import BTN from '@/app/COMPONENT/BTN/ButtonBtn';




const BannerHeader = () => {
    return (
        <div className='space-y-4 md:space-y-10'>
            <div className='w-full'>
                <h1 className={` primary-fontsize ${bbgBartle.className} text-(--accent-color)`}>LEARN , <br />TEACH <br /> AND EXPLORE</h1>
            </div>

            <div className='w-full md:w-4xl'>
                <p className={`secondery-fontsize ${smoochSans.className}`}>Share Ideas, Discover More, Explore the World.
                    Join a community where curiosity leads the way, and every post sparks new possibilities. Your next adventure starts here.</p>
            </div>
            <div>
                <BTN classes='py-6'>Explore More <ArrowBigRight/></BTN>
            </div>
        </div>
    );
};

export default BannerHeader;