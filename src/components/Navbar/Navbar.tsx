import { authModalState } from '@/atoms/authModelAtom';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type NavbarProps = {
    
};



const Navbar:React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    
    const handleClick = () => {
        setAuthModalState(prev => ({...prev, isOpen: true}))
    }

    return <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
        <Link href="/" className="flex items-center justify-center h-20">
            <Image src='/logo.png' alt="leetcodelight" height={200} width={200} className="h-full" />
        </Link>
        <div className="flex items-center">
            <button
            onClick={handleClick}
            className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-md border-2 border-transparent hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange transition duration-300 ease-in-out">Sign In</button>
        </div>
    </div>
}
export default Navbar;