import BootstrapIcon from '../../../assets/icons/BootstrapIcon';
import CssIcon from '../../../assets/icons/CssIcon';
import GitIcon from '../../../assets/icons/GitIcon';
import GithubIcon from '../../../assets/icons/GithubIcon';
import HtmlIcon from '../../../assets/icons/HtmlIcon';
import JavascriptIcon from '../../../assets/icons/JavascriptIcon';
import PostgresIcon from '../../../assets/icons/PostgresIcon';
import RailsIcon from '../../../assets/icons/RailsIcon';
import ReactIcon from '../../../assets/icons/ReactIcon';
import RubyIcon from '../../../assets/icons/RubyIcon';
import SaasIcon from '../../../assets/icons/SaasIcon';
import TailwindIcon from '../../../assets/icons/TailwindIcon';
import TypeScriptIcon from '../../../assets/icons/TypeScriptIcon';

const GridSkills = () => {
  return (
    <>
      <div className="grid grid-cols-2  md:grid-cols-4 w-[700px]">
        <div className="grid gap-4">
          <section className="buttons">
            <div className="spin btn thick">
              <div className="flex flex-col justify-between items-between  rounded-lg shadow-2xl  p-5 w-36 h-36 ">
                <JavascriptIcon />
                <div className="flex justify-end items-center">
                  <span>Javascript</span>
                </div>
              </div>
            </div>
          </section>
          <div className="border border-gray-400 rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
            <TypeScriptIcon />
            <div className="flex justify-end items-center">
              <span>Typescript</span>
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
            <ReactIcon />
            <div className="flex justify-end items-center">
              <span>React</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="border border-gray-400 rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
            <RubyIcon />
            <div className="flex justify-end items-center">
              <span>Ruby</span>
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
            <RailsIcon />
            <div className="flex justify-end items-center">
              <span>Rails</span>
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
            <PostgresIcon />
            <div className="flex justify-end items-center">
              <span>Postgresql</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="border border-gray-400 rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
            <CssIcon />
            <div className="flex justify-end items-center">
              <span>CSS</span>
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
            <TailwindIcon />
            <div className="flex justify-end items-center">
              <span>Tailwind Css</span>
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
            <BootstrapIcon />
            <div className="flex justify-end items-center">
              <span>Tailwind Css</span>
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
            <SaasIcon />
            <div className="flex justify-end items-center">
              <span>Saas</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="border rounded-lg shadow-2xl bg-slate-300 border-gray-400 row-span-2  p-3 flex flex-col justify-between items-between w-36">
            <HtmlIcon />
            <div className="flex justify-end items-center">
              <span>HTML</span>
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
            <GitIcon />
            <div className="flex justify-end items-center">
              <span>Git</span>
            </div>
          </div>
          <section className="buttons">
            <div className="border border-gray-400 spin btn thick rounded-lg shadow-2xl bg-slate-300 p-3 flex flex-col justify-between items-between w-36">
              <GithubIcon />
              <div className="flex justify-end items-center">
                <span>Github</span>
              </div>
              {/* <button className="spin btn thick">Spin Thick</button> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GridSkills;
