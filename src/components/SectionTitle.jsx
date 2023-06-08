import React from 'react';
import { RiCameraLensFill } from "react-icons/ri"

const SectionTitle = ({title}) => {
    return (
        <div className='flex item-center gap-3'>
            <RiCameraLensFill className='text-4xl text-[#77bef8]'></RiCameraLensFill>
            <h2 className='font-poppins text-3xl font-medium uppercase dark:text-white'>{title}</h2>
        </div>
    );
};

export default SectionTitle;