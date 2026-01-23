"use client"
import { smoochSans } from '@/app/FONTS/fonts';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import CommonInput from '../COMMONCOMPONENT/CommonInput';

const CreateNewCollection = () => {

    const [isCreateCollectionOpen, setIsCreateCollectionOpen] = useState(false)

    const [collectionName,setCollectionName]=useState("")

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(collectionName)
    }

    const handleSetName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setCollectionName(e.target.value)
    }
    return (
        <div >
            <div className='flex py-1.5 px-2.5 cursor-pointer bg-(--secondary-color) rounded mb-3' >
                <div>
                    <Plus />
                </div>
                <div onClick={() => setIsCreateCollectionOpen(!isCreateCollectionOpen)}>
                    <p className={`${smoochSans.className}`}> Create New Collection</p>
                </div>
            </div>


            {
                isCreateCollectionOpen &&
                <form onSubmit={handleSubmit}>
                    <CommonInput handlerFunction={handleSetName} sendButton={'Create'} variant='ghost' placeholder='Collection Name' type='text' />
                </form>
            }

        </div>
    );
};

export default CreateNewCollection;