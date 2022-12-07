import { images } from "../assets";

export const Register = () => {
  return (
    <section id="register" className="w-screen">
      <img src={images[5]} className="w-full -z-10 absolute" alt="" />
      <div className="flex justify-end mr-64 pt-36">
        <form className="bg-black w-96 p-12 rounded-lg">
          <h1 className="text-white text-2xl font-bold mb-8">Register Now</h1>
          <input className="rounded-md px-2 py-1 w-full" type="text" placeholder="Your Name..." />
          <br />
          <br />
          <input className="rounded-md px-2 py-1 w-full" type="text" placeholder="Your Email..." />
          <br />
          <br />
          <input className="rounded-md px-2 py-1 w-full" type="password" placeholder="Password..." />
          <br />
          <br />
          <button className="bg-white rounded-lg px-2 py-1 hover:bg-gray-500 hover:text-white">Send Request</button>
        </form>
      </div>
    </section>
  )
};
