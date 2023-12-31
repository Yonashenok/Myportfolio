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
              className="rounded-xl border-1  dark:opacity-80 border-[#2dc7b4]"
              src={photo}
              alt=""
            />
          </div>
        </div>
        <div className="container mx-auto p-8 lg:w-[650px] ">
          <h1 className="lg:px-7 text-xl md:text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white lg:mb-9 ">
            I’m Yonas Henok. I live in Addis Ababa, where I Develop the future.
          </h1>
          <p className="text-lg lg:text-xl lg:w-[650px] p-0 font-normal dark:font-light  leading-relaxed mt-6 mb-6  text-stone-900  dark:text-teal-100 lg:px-7">
            I am a full-stack developer from Microverse. an online school for
            remote developers. I was able to learn languages such as Javascript,
            React, Typescript, Rails, and more within six months. Not only did I
            learn to code technically. I also learned to work remotely and
            collaborate with other students across the globe. Every day I
            pair-programed and worked with other developers where I learned
            important skills of communication and teamwork. I am a quick learner
            of frameworks and technologies.
          </p>
          <p className="text-lg lg:text-xl  lg:w-[650px] font-normal dark:font-light  leading-relaxed mt-6 mb-6  text-stone-900  dark:text-teal-100 lg:px-7">
            I have a previous Degree as an Electromechanical Engineer and this
            taught me the discipline, to work hard, to have determination, and
            to never give up. This is an important skill when you work in tech
            you always face bugs or issues it is important to adapt to
            difficulty. and be resilient. With a solid foundation in engineering
            principles and a hands-on approach to problem-solving. I have
            successfully transitioned into the dynamic world of full-stack
            development, where I continue to leverage my analytical skills and
            attention to detail to build robust user-centric solutions.
          </p>

          <p className="text-lg lg:text-xl lg:w-[650px] font-normal dark:font-light  leading-relaxed mt-6 mb-6 text-stone-900  dark:text-teal-100 lg:px-7">
            As I embark on this new chapter as a Full Stack Developer, I am
            eager to bring my unique perspective and interdisciplinary skill set
            to a forward-thinking team. I am excited about the opportunity to
            contribute to impactful projects and continue to grow both
            personally and professionally in this ever-evolving industry.
          </p>
          <p className="text-lg lg:text-xl lg:w-[650px] font-normal dark:font-light leading-relaxed mt-6 mb-6  text-stone-900  dark:text-teal-100 lg:px-7">
            Actively engaged in the tech community through meetups and webinars,
            staying abreast of the latest industry trends and best practices in
            software development.
          </p>
        </div>
        <div className="flex flex-col w-100 justify-start gap-6 overflow-clip items-start lg:items-end ">
          <div className="origin-bottom rotate-3 hidden lg:block">
            <div className="w-[140px] md:w-[240px] mx-7 lg:mx-16 my-7">
              <img
                className="rounded-xl border-1 dark:opacity-80 border-[#2dc7b4]"
                src={photo}
                alt=""
              />
            </div>
          </div>
          <div className="flex w-100 flex-col justify-start items-start px-10 lg:px-0 gap-3 mb-6">
            <a target="blank" href="https://twitter.com/YonasHenok3">
              <span className="flex justify-between items-center text-stone-900  dark:text-teal-100 font-normal dark:font-light text-lg lg:text-xl gap-3">
                <Twitter />
                Follow on Twitter
              </span>
            </a>
            <a target="blank" href="https://github.com/Yonashenok">
              <span className="flex justify-between items-center text-stone-900  dark:text-teal-100 font-normal dark:font-light text-lg lg:text-xl gap-3">
                <Github color="888" />
                Follow on Github
              </span>
            </a>
            <a target="blank" href="http://www.medium.com/@yonashenok24">
              <span className="flex justify-between items-center text-stone-900  dark:text-teal-100 font-normal dark:font-light text-lg lg:text-xl gap-3">
                <Medium />
                Follow on Medium
              </span>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/yonas-henok">
              <span className="flex justify-between items-center text-stone-900  dark:text-teal-100 font-normal dark:font-light text-lg lg:text-xl gap-3">
                <Linkedin />
                Follow on Linkedin
              </span>
            </a>
            <a target="blank" href="mailto:yonashenok24@gmail.com">
              <span className="flex justify-between items-center text-stone-900  dark:text-teal-100 font-normal dark:font-light text-lg lg:text-xl gap-3">
                <EmailIcon />
                yonashenok24@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
