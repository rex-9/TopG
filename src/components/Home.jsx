import { images } from "../assets";

export const Home = () => {
  return (
    <section id="home">
      <div className="flex justify-center w-full">
        <img src={images[0]} alt="" />
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex justtify-center items-center gap-8">
          <img src={images[1]} alt="" />
          <div>
            <h1 className="font-bold text-xl">Why you should rely on TopG?</h1>
            <p className="my-4">This is the only website which gathers all the necessary resources for networking students in one place.</p>
            <ul className="list-disc font-bold">
              <li>We show things in the most simplistic way</li>
              <li>You can find all the necessary links in one stop</li>
              <li>All features are free until 2023</li>
              <li>The management will visit you often to ensure we provide all your needs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};
