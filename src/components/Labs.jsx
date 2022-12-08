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
            <h1 className="font-bold text-2xl">
              <a href="https://www.youtube.com/playlist?list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct">Routing and Switching lab videos by Jeremy’s IT Lab</a>
            </h1>
            <ul className="list-disc text-red-700 text-lg">
              <li className="hover:text-red-400">
                <a href="https://www.youtube.com/watch?v=NkJEKGIzN7I&list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct&index=5" target="_blank">
                  Basic Serial Connection Configuration
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://www.youtube.com/watch?v=0T6Pt-h0jws&list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct&index=5" target="_blank">
                  VLAN Configuration
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://www.youtube.com/watch?v=3II2RwiXImg&list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct&index=7" target="_blank">
                  Inter-VLAN Routing
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://www.youtube.com/watch?v=xDdIbcSSG0o&list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct&index=13" target="_blank">
                  Naming VLANs
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://www.youtube.com/watch?v=cS6SnkS3tgA&list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct&index=24" target="_blank">
                  Static Routing
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://www.youtube.com/watch?v=52A5py7IkXc&list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct&index=28" target="_blank">
                  RIP
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://www.youtube.com/watch?v=MaV1ku2fgXI&list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct&index=35" target="_blank">
                  DHCP
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://www.youtube.com/watch?v=VTVo3rQVUF0&list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct&index=36" target="_blank">
                  DNS
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://www.youtube.com/watch?v=Pkfx-8b6Hxo&list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct&index=38" target="_blank">
                  Static NAT
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://www.youtube.com/watch?v=y2H5hiuN3zs&list=PLxbwE86jKRgMQ4HTuaJ7yQgA2BoNwY9ct&index=38" target="_blank">
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
