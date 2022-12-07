import { images } from "../assets";

export const CCNA = () => {
  return (
    <section id="ccna" className="flex justify-center mt-16 h-screen items-center">
      <div className="w-[80%] flex flex-col items-center">
        <img src={images[4]} alt="" />
        <p className="my-4 text-center">
          CCNA is an exam by <strong>Cisco</strong> which covers networking fundamentals, security fundamentals, IP services, automation and programmability.
          Passing its core exam will award you a <strong>CCNA Certificate</strong> which validates that you have the required skills to manage and optimize
          today’s most advanced networks.
        </p>
        <div className="bg-blue-200 py-8 mt-4 w-screen flex justify-center">
          <div>
            <h1 className="font-bold text-xl text-center mb-4">
              Are you having a difficulty to find the right lecturing videos and workbook to self-study for CCNA exam?
              <br />
              Don’t worry, TopG got you!
            </h1>
            <ul className="list-disc text-red-700 text-lg">
              <li className="hover:text-red-400">
                <a href="https://youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" target="_blank">
                  CCNA 200-301 Complete Course 2022 by Jeremy’s IT Lab
                </a>
              </li>
              <li className="hover:text-red-400">
                <a href="https://drive.google.com/file/d/1ZPWWRqg4NChbTwZxVCBnqGJO2qJ4JYk0/view?usp=share_link" target="_blank">
                  CCNA 200-125 NOA Workbook 1-2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};
