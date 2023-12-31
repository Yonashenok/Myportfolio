import ProjectCard from './card/ProjectCard';
import ReverseCard from './card/ReverseCard';
import projectInfo from './data/data';

const Project = () => {
  const { jetLogix, todoApp, expensePal, novaFlix } = projectInfo;

  return (
    <>
      <div className="container mx-auto p-8 flex flex-col justify-center items-center  ">
        <h1 className="lg:px-7 lg:mt-6 text-3xl lg:text-5xl text-left lg:w-[800px] font-bold text-slate-900 dark:text-white">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="text-lg lg:text-xl text-start lg:w-[850px]  font-normal dark:font-light  leading-relaxed mt-6 mb-6  text-stone-900  dark:text-teal-100 lg:px-6">
          These are the ones that I’m most proud of. so if you see something
          that piques your interest, check out the code and contribute if you
          have ideas for how it can be improved.
        </p>
      </div>
      <div className=" flex flex-col justify-start gap-4 items-center p-4 ">
        <ProjectCard info={jetLogix} />
        <ReverseCard info={expensePal} />
        <ProjectCard info={novaFlix} />
        <ReverseCard info={todoApp} />
      </div>
    </>
  );
};

export default Project;
