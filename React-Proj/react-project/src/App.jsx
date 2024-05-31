import { CiMail } from "react-icons/ci";
import Image from "./assets/Images/first.jpg"
function App() {

  return (
    <>
     <header className="bg-[#7E33E0] text-white p-3 pl-[314px] flex">
      <div className="conatiner">

      <p className="mr-12"><CiMail/> &nbsp;apsarapaneru@gmail.com</p>
      <p className="mr[404px]" ><span>+977 9887655</span></p>
      </div>
      
      <div className="mr-[444px]">
        <ul className="flex space-x-9">
          <li>English</li>
          <li>USD</li>
          <li>Login</li>
          <li>Wishlist</li>
        </ul>
      </div>
      </header>
      <nav className="flex h-44px pl-[290px]">
        <p className="mr-12 ">HEKTO</p>
        <ul className=" flex">
        <li>Home</li>
        <li>Page</li>

        <li>Products</li>
        <li>Blog</li>
        <li>Shopping</li>
        </ul></nav>
        <div className="">
        <div className="h-screen track border-2 border-blue-70 h-30 w-30">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum voluptas nisi sunt enim. Ullam iste praesentium nesciunt,
         iure corporis deleniti maxime hic labore sit veniam autem molestias atque quos rem.
         </div>
         <img src={Image} alt=""  className="h-100px w-100px"/>
         <img src={Image} alt=""  className="h-100px w-100px"/>
         <img src={Image} alt=""  className="h-100px w-100px"/>
         <img src={Image} alt=""  className="h-100px w-100px"/>

        </div>
    </>
    
  )
}

export default App
