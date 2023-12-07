import EmailIcon from '../../assets/icons/EmailIcon';
import Github from '../../assets/icons/Github';
import Linkedin from '../../assets/icons/Linkden';
import Medium from '../../assets/icons/Medium';
import Twitter from '../../assets/icons/twitter';
import photo from '../../assets/imgs/new.jpg';

const About = () => {
  return (
    <>
      <div className="container md:grid p-7 grid-cols-1 lg:grid-cols-2 w-100 ">
        <div className="origin-bottom rotate-3 w-100 flex justify-center items-center  lg:hidden">
          <div className="w-[140px] md:w-[240px] mx-7 lg:mx-16 my-7">
            <img
              className="rounded-xl border-1 opacity-80 border-[#2dc7b4]"
              src={photo}
              alt=""
            />
          </div>
        </div>
        <div className="container mx-auto p-8 lg:w-[650px] ">
          <h1 className="lg:px-7 text-3xl lg:text-5xl font-bold text-white lg:mb-9 ">
            I’m Yonas Henok. I live in Addis Ababa, where I Develop the future.
          </h1>
          <p className="text-md lg:text-lg lg:w-[650px] font-light  leading-relaxed mt-6 mb-6  text-teal-100 lg:px-7">
            I'm a full-stack developer and love clean code and accessible
            design. Currently, I specialize in JavaScript, React, Redux,
            Typescript and Ruby on Rails, from Microverse, a remote software
            development school that uses Pair programming and working with
            remote developers all over the world on real world projects. I'm
            Fluent in English and Amharic, capable of learning quickly and
            efficiently frameworks, and technologies.
          </p>
          <p className="text-md lg:text-lg  lg:w-[650px] font-light  leading-relaxed mt-6 mb-6  text-teal-100 lg:px-7">
            As an Electromechanical Engineer with a passion for technology and
            innovation, I have always been fascinated by the intersection of
            hardware and software. With a solid foundation in engineering
            principles and a hands-on approach to problem-solving, I have
            successfully transitioned into the dynamic world of full stack
            development, where I continue to leverage my analytical skills and
            attention to detail to build robust, user-centric solutions.
          </p>

          <p className="text-md lg:text-lg lg:w-[650px] font-light  leading-relaxed mt-6 mb-6  text-teal-100 lg:px-7">
            As I embark on this new chapter as a Full Stack Developer, I am
            eager to bring my unique perspective and interdisciplinary skill set
            to a forward-thinking team. I am excited about the opportunity to
            contribute to impactful projects and continue to grow both
            personally and professionally in this ever-evolving industry.
          </p>
          <p className="text-md lg:text-lg lg:w-[650px] font-light  leading-relaxed mt-6 mb-6  text-teal-100 lg:px-7">
            Actively engaged in the tech community through meetups and webinars,
            staying abreast of the latest industry trends and best practices in
            software development.
          </p>
        </div>
        <div className="flex flex-col w-100 justify-start gap-6 items-start lg:items-end ">
          <div className="origin-bottom rotate-3 hidden lg:block">
            <div className="w-[140px] md:w-[240px] mx-7 lg:mx-16 my-7">
              <img
                className="rounded-xl border-1 opacity-80 border-[#2dc7b4]"
                src={photo}
                alt=""
              />
            </div>
          </div>
          <div className="flex w-100 flex-col justify-start items-start px-10 lg:px-16 gap-3 mb-6">
            <span className="flex justify-between items-center text-white gap-3">
              <Twitter />
              Follow on Twitter
            </span>
            <span className="flex justify-between items-center text-white gap-3">
              <Github />
              Follow on Github
            </span>
            <span className="flex justify-between items-center text-white gap-3">
              <Medium />
              Follow on Medium
            </span>
            <span className="flex justify-between items-center text-white gap-3">
              <Linkedin />
              Follow on Linkedin
            </span>
            <span className="flex justify-between items-center text-white gap-4 ">
              <EmailIcon />
              yonashenok24@gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
