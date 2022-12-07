import { images } from "../assets";

export const Network = () => {
  return (
    <section id="network" className="flex justify-center mt-16 h-screen items-center">
      <div className="w-[80%] flex flex-col items-center gap-8">
        <img src={images[2]} alt="" />
        <p className="text-center text-lg">It is vital to protect client data and information, ensure reliable access and network performance
          as well as to prevent from cyber threats and to keep the shared datas secure.
          That’s where <strong>Network Security</strong> steps up and it plays a massive role in protecting your data from breaches and other threats.</p>
        <div className="bg-blue-200 w-screen flex flex-col items-center gap-4 py-8">
          <h1 className="text-center text-2xl font-bold">Articles concerning with Network Security</h1>
          <ul className="list-disc text-red-700 text-lg">
            <li className="hover:text-red-400">
              <a href="https://www.eccouncil.org/network-security/" target="_blank">
                https://www.eccouncil.org/network-security/
              </a>
            </li>
            <li className="hover:text-red-400">
              <a href="https://www.geeksforgeeks.org/network-security/" target="_blank">
                https://www.geeksforgeeks.org/network-security/
              </a>
            </li>
            <li className="hover:text-red-400">
              <a href="https://www.cisco.com/c/en/us/products/security/what-is-network-security.html"> target="_blank"
                https://www.cisco.com/c/en/us/products/security/what-is-network-security.html
              </a>
            </li>
            <li className="hover:text-red-400">
              <a href="https://theimportantsite.com/10-reasons-why-network-security-is-important/" target="_blank">
                https://theimportantsite.com/10-reasons-why-network-security-is-important/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};
