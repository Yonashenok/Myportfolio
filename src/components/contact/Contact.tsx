import { InfoCard } from './card/InfoCard';

const Contact = () => {
  return (
    <div className="container w-100 mt-7  flex flex-col justify-center gap-3 items-center">
      <div className="w-100 ">
        <h3 className="lg:px-7 lg:mt-6 text-center text-3xl lg:text-5xl  font-bold text-white ">
          Get In Touch
        </h3>
        <p className="text-md text-center lg:text-lg lg:w-[800px] font-light  leading-relaxed mt-6 mb-6  text-teal-100 lg:px-7">
          Here you can let me know if you have any criticism, suggestion or
          problem, I'm waiting to hear your voice or see your message.
        </p>
      </div>
      <form className="flex  justify-center gap-x-16 w-[850px] text-slate-800 p-9 mb-6 items-start rounded-lg border border-stone-400 ">
        <div className="flex flex-col  justify-center gap-3 items-start ">
          <label className=" text-white" htmlFor="FullName">
            FullName (required)
          </label>
          <input
            className="outline-1 outline-cyan-600 p-2 rounded-lg w-96"
            id="FullName"
            type="text"
            required
          />
          <label className=" text-white" htmlFor="Email">
            Email (required)
          </label>
          <input
            className="outline-1 outline-cyan-600 p-2 rounded-lg w-96"
            id="Email"
            type="email"
            required
          />
          <label className=" text-white" htmlFor="Subject">
            Subject (required)
          </label>
          <input
            className="outline-1 outline-cyan-600 p-2 rounded-lg w-96"
            id="Subject"
            type="text"
            required
          />
        </div>
        <label className=" text-white flex flex-col" htmlFor="Comment">
          Comment
          <textarea
            className="outline-1 outline-cyan-600  p-2 text-slate-800   rounded-xl mt-3 "
            name="Comment"
            id="Comment"
            cols={40}
            rows={9}
          ></textarea>
        </label>
      </form>
      <InfoCard />
    </div>
  );
};

export default Contact;
