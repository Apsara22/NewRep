import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function HomeP(){
    let Links =[
        { name: 'HomePage', link:'/'},
        { name: 'Services', link:'/'},
        { name: 'Products', link:'/'},
        { name: 'Sales', link:'/'},
        { name: 'About', link:'/'}
    ]
    let[isOpen, setIsOpen] = useState(false)
    return(
        <div className="shadow-md w-full fixed top-0 left-0">
            
            <nav className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        <div className="flex text-2l cursor-pointer items-center gap-2">
            <CiMail className="h-7 w-7"/> <span>HEKTO</span>
            </div>
            <div onClick={()=> setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
            {
                isOpen ? <IoMdClose/> :<FaBars/>
            }
            
            </div>
            <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12
                md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
               transition-all duration-500 ease-in ${isOpen ? 'top-12' :'top[-490px]'}`}>
                {
                    Links.map(link =>(
                        <li className=" font-semibold my-7 md:my-0 md:ml-8">
                            <a href='/'>{link.name}</a></li>
                    ))
                }
                <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static"> Get Started</button>
            
            </ul>
        
        </nav>
            </div>
    )
}