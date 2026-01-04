"use client"
import AllBlogCards from "../MAPPEDCARD/AllBlogCards";
import AllBlogSideBar from "./AllBlogSideBar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter, } from "lucide-react";

const AllBlogs = () => {


    const [panelOpen, setPanelOpen] = useState(false)
    const handleSearch=(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log("Hello")
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-6'>
            <div className="md:hidden flex gap-2.5 justify-between  p-2 overflow-hidden">

                <form onSubmit={handleSearch} className='border flex items-center gap-2 w-2xs'>
                    <input placeholder='SEARCH BY AUTHOR OR TOPIC' className='border-0 outline-0 flex-1 px-1' />
                </form>

                <Button onClick={()=>setPanelOpen(true)} className="border bg-transparent text-(--accent-color) cursor-pointer"><Filter className="text-(--accent-color)" /> Filter</Button>

            </div>

            <div className='col-span-1'></div>
            <div className='col-span-4 grid grid-cols-2 md:grid-cols-6 p-2'>
                <div className="col-span-4">
                    <AllBlogCards />
                </div>

                <div className={`col-span-2 `} >
                    <div className={` fixed top-0 bg-gray-800 h-screen ${panelOpen ? 'right-0' :'-right-96'} md:sticky md:bg-transparent md:top-4`}>
                        <div className="px-2 "><AllBlogSideBar setPanelOpen={setPanelOpen}/></div>
                    </div>
                </div>
            </div>
            <div className='col-span-1'></div>
        </div>
    );
};

export default AllBlogs;


