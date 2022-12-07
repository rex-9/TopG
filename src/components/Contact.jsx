import { vectors } from "../assets";

export const Contact = () => {
  return (
    <section id="contact" className="flex justify-center mt-16 h-screen items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">Feel free to send your feedbacks to our Email or Instagram dm!</h1>
        <div className="bg-blue-900 rounded-lg w-96 p-8 my-8 flex justify-center text-white">
          <div>
            <h1 className="font-bold text-lg">Contact Information</h1>
            <p className="my-4">Our team will get back to you as soon as possible.</p>
            <div className="flex gap-4 mb-8 mt-8">
              <img src={vectors[0]} alt="" />
              TopG Networking Resources
            </div>
            <div className="flex gap-4 mb-8">
              <img src={vectors[1]} alt="" />
              topgtechnology@gmail.com
            </div>
            <div className="flex gap-4">
              <img src={vectors[2]} alt="" />
              Yangon, Myanmar
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
