import Github from '../../assets/icons/Github';
import Linkedin from '../../assets/icons/Linkden';
import Medium from '../../assets/icons/Medium';
import Twitter from '../../assets/icons/twitter';
import photo from '../../assets/imgs/new.jpg';

const Home = (): JSX.Element => {
  return (
    <>
      <div className="container mx-auto px-7 ">
        <div className="w-[130px] mx-7 lg:mx-16 my-7">
          <article className="card-photo">
            <img
              className="rounded-xl border-1 opacity-80  border-[#2dc7b4]"
              src={photo}
              alt="my image"
            />
            <span className="top-ani anime-span"></span>
            <span className="right-ani anime-span"></span>
            <span className="bottom-ani anime-span"></span>
            <span className="left-ani anime-span"></span>
          </article>
        </div>
        <div className="px-7">
          <h1 className="lg:px-7 text-4xl font-bold text-white">
            Full Stack Developer
          </h1>
          <p className="text-md lg:text-lg lg:w-[800px] font-light  leading-relaxed mt-6 mb-6  lg:px-7 text-teal-100">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
        </div>
        <div className="flex justify-between items-center w-[300px] px-16 gap-2 mb-24">
          <Twitter />
          <Github />
          <Medium />
          <Linkedin />
        </div>
        <div className="px-16">
          <h3 className="text-4xl text-white"> My Skills</h3>

          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div className="p-7 bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
