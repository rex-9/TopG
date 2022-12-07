import { images } from "../assets";

export const Labs = () => {
  return (
    <section id="labs" className="flex justify-center mt-16 h-screen items-center">
      <div className="flex flex-col items-center justify-center">
        <img src={images[3]} alt="" />
        <p className="mt-4">
          Cisco Packet Tracer is arguably the best visual simulation tool that allows users
          to create network topologies and imitate modern computer networks.
        </p>
        <div className="bg-blue-200 py-8 mt-4 w-screen flex justify-center">
          <div>
            <h1 className="font-bold text-2xl">Routing and Switching lab videos by Jeremy’s IT Lab</h1>
            <ul className="list-disc text-red-700 text-lg">
              <li className="hover:text-red-400">
                <a href="https://youtu.be/NkJEKGIzN7I/" target="_blank">
                  Basic Serial Connection Configuration
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://youtu.be/0T6Pt-h0jws" target="_blank">
                  VLAN Configuration
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://youtu.be/3II2RwiXImg"> target="_blank"
                  Inter-VLAN Routing
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://youtu.be/cS6SnkS3tgA" target="_blank">
                  Static Routing
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://youtu.be/52A5py7IkXc" target="_blank">
                  RIP
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://youtu.be/MaV1ku2fgXI" target="_blank">
                  DHCP
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://youtu.be/VTVo3rQVUF0" target="_blank">
                  DNS
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://youtu.be/Pkfx-8b6Hxo" target="_blank">
                  Static NAT
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://youtu.be/y2H5hiuN3zs" target="_blank">
                  Dynamic NAT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};
