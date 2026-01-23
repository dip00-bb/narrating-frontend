import { smoochSans } from '@/app/FONTS/fonts';
import { BookMarkedIcon } from 'lucide-react';

interface IcollectionName {
    collectionName: string
}
const Collection = ({ collectionName }: IcollectionName) => {
    return (
        <div className='flex justify-between py-3.5 border rounded px-1'>
            <div>
                <p className={`${smoochSans.className}`}>{collectionName}</p>
            </div>
            <div className='w-fit h-fit cursor-pointer'>
                <BookMarkedIcon />
            </div>
        </div>
    );
};

export default Collection;