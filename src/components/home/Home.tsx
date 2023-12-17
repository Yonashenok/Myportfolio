import Github from '../../assets/icons/Github';
import Linkedin from '../../assets/icons/Linkden';
import Medium from '../../assets/icons/Medium';
import Twitter from '../../assets/icons/twitter';
import image1 from '../../assets/imgs/pexels-leon-ardho-2468339.jpg';
import image2 from '../../assets/imgs/shane-rounce-DNkoNXQti3c-unsplash.jpg';
import image3 from '../../assets/imgs/amr-taha-umixjcVd0Ws-unsplash.jpg';
import image4 from '../../assets/imgs/pexels-suliman-sallehi-1576939.jpg';
import image5 from '../../assets/imgs/pexels-monstera-production-9487242.jpg';

import GridSkills from './Grid/GridSkills';

const Home = (): JSX.Element => {
  return (
    <>
      <div className="container mx-auto xl:px-7 lg:mt-7 ">
        <div className="px-7">
          <h1 className="lg:px-7 text-4xl font-bold text-white">
            Full Stack Developer
          </h1>
          <p className="text-md lg:text-lg lg:w-[800px] font-light  leading-relaxed mt-6 mb-6  lg:px-7 text-teal-100">
            I'm Yonas, a Full Stack Developer based in Ethiopia who is
            passionate about delivering value to businesses through technology.
            I love the challenge of finding creative solutions to problems. and
            I enjoy collaborating with teams to achieve great results.
          </p>
        </div>
        <div className="flex justify-between items-center w-[200px] lg:w-[300px] px-10 lg:px-16 gap-2 mb-24">
          <a href="https://twitter.com/YonasHenok3" target="blank">
            <Twitter />
          </a>
          <a href="https://github.com/Yonashenok" target="blank">
            <Github color="888" />
          </a>
          <a href="http://www.medium.com/@yonashenok24" target="blank">
            <Medium />
          </a>
          <a href="https://www.linkedin.com/in/yonas-henok" target="blank">
            <Linkedin />
          </a>
        </div>
        <div className=" flex  justify-center items-center overflow-hidden md:overflow-visible gap-8 w-100">
          <img
            className="rounded-2xl w-[150px] h-[150px] lg:w-[250px] lg:h-[350px] origin-top rotate-3 "
            src={image1}
            alt=""
          />
          <img
            className="rounded-2xl w-[150px] h-[150px] lg:w-[250px] lg:h-[350px] origin-bottom -rotate-3"
            src={image2}
            alt=""
          />
          <img
            className="rounded-2xl w-[150px] h-[150px] lg:w-[250px] lg:h-[350px] origin-bottom rotate-2 me-4 "
            src={image3}
            alt=""
          />
          <img
            className="rounded-2xl w-[150px] h-[150px] lg:w-[250px] lg:h-[350px] origin-top rotate-3"
            src={image4}
            alt=""
          />
          <img
            className="rounded-2xl w-[150px] h-[150px] lg:w-[250px] lg:h-[350px] origin-bottom -rotate-3"
            src={image5}
            alt=""
          />
        </div>
        <div className="px-7 lg:px-16 lg:mt-24">
          <h3 className="text-4xl text-white py-1"> My Skills</h3>
          <p className="text-md lg:text-lg lg:w-[800px] font-light  leading-relaxed mt-6 mb-6  text-teal-100">
            Here you can see my skills, one of the fascinations of the computer
            world is the momentary changes of technologies, but I try to update
            my knowledge every day and experience new technologies.
          </p>
          <div className="lg:mt-6 p-3">
            <GridSkills />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
