
const Navbar = () =>{
    return(
       
       <div className="bg-black h-12">
         <div className="text-yellow-400 flex justify-between items-center">
        <h1 className="text-xl m-2">Navbar</h1>
        <ul className="flex gap-4 cursor-pointer">
            <a className="hover:text-white mr-2" href="">Home</a>
            <a className="hover:text-white mr-2" href="">Contact</a>
            <a className="hover:text-white mr-2" href="">About</a>
            <a className="hover:text-white mr-2" href="">Jobs</a>
         </ul>
        </div>
        
       </div>
       
    )

}
export default  Navbar 
