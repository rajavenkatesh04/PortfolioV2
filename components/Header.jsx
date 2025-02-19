import React from 'react';
import Image from "next/image";
import {assets} from "@/assets/assets";

const Header = () => {
    return (
        <div className={'w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'}>
            <div>
                <Image src={assets.profile_img} alt={"Profile Image"} className='rounded-full w-32'/>
            </div>

            <h3 className={'flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'}>Hi! I'm Raja Venkatesh <Image src={assets.hand_icon} alt={"hand_icon"} className={'w-6'}/> </h3>

            <h1 className={'text-3xl sm:text-6xl lg:text-[66px] font-Ovo'}>Full-stack & Java developer based in India</h1>
            <p className={'max-w-2xl mx-auto font-Ovo'}>Leveraging expertise in modern web technologies, I focus on building sleek and efficient solutions that prioritize performance and user experience.</p>

            <div className={'flex flex-col sm:flex-row gap-4 mt-4'}>
                <a href={"#contact"} className={'px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'}>Contact me <Image src={assets.right_arrow_white} alt={"arrow"} className={'w-4'} /> </a>

                <a href={"/sample-resume.pdf"} download className={'px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'}>My Resume<Image src={assets.download_icon} alt={"arrow"} className={'w-4'} /> </a>
            </div>
        </div>
    )
}

export default Header;