import { Button } from '@material-tailwind/react';
import { InfoCard } from './card/InfoCard';

const Contact = () => {
  return (
    <div className="container w-100 mt-7  flex flex-col justify-center gap-3 items-center p-3">
      <div className="w-100 ">
        <h3 className="lg:px-7 lg:mt-6 text-center text-3xl lg:text-5xl  font-bold text-white ">
          Get In Touch
        </h3>
        <p className="text-md text-center lg:text-lg lg:w-[800px] font-light  leading-relaxed mt-6 mb-6  text-teal-100 lg:px-7">
          Here you can let me know if you have any criticism, suggestion or
          problem, I'm waiting to hear your voice or see your message.
        </p>
      </div>
      <form>
        <div className=" flex lg:flex-row flex-col w-full  justify-center gap-x-16 lg:w-[850px] text-slate-800 lg:p-9 mb-2 lg:items-start rounded-lg ">
          <div className="flex flex-col  justify-center gap-3 items-start ">
            <label className=" text-white" htmlFor="FullName">
              FullName (required)
            </label>
            <input
              className="outline-1 outline-cyan-600 p-2 rounded-lg w-80 lg:w-96"
              id="FullName"
              type="text"
              required
            />
            <label className=" text-white" htmlFor="Email">
              Email (required)
            </label>
            <input
              className="outline-1 outline-cyan-600 p-2 rounded-lg w-80 lg:w-96"
              id="Email"
              type="email"
              required
            />
            <label className=" text-white" htmlFor="Subject">
              Subject (required)
            </label>
            <input
              className="outline-1 outline-cyan-600 p-2 rounded-lg w-80 lg:w-96"
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
        </div>

        <Button
          type="submit"
          variant="outlined"
          className="flex  justify-center bg-[#82ada8]  lg:w-96 lg:mx-10 text-stone-800 text-md items-center gap-3"
          fullWidth
        >
          Submit
        </Button>
      </form>
      <InfoCard />
    </div>
  );
};

export default Contact;
