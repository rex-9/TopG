export const Nav = () => {
  return (
    <nav className="flex justify-around w-screen h-12 items-center">
      <p>Top G</p>
      <ul className="flex justify-around w-[60%]">
        <li className="hover:text-gray-500"><a href="#home">Home</a></li>
        <li className="hover:text-gray-500"><a href="#network">Network Security</a></li>
        <li className="hover:text-gray-500"><a href="#labs">Packet Tracer Labs</a></li>
        <li className="hover:text-gray-500"><a href="#ccna">CCNA course videos</a></li>
        <li className="hover:text-gray-500"><a href="#contact">Contact Us</a></li>
        <li className="hover:text-gray-500 bg-blue-300 hover:bg-blue-500 rounded-lg px-2 py-1 hover:text-white"><a href="#register">Register</a></li>
      </ul>
    </nav>
  )
};
