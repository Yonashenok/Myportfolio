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
    <div className="grid grid-cols-4 gap-1  w-[265px] sm:w-[500px] sm:grid-cols-5  md:grid-cols-7 xl:grid-cols-8 xl:w-[1000px]  lg:w-[850px]">
      <div className="grid gap-4">
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <JavascriptIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <TypeScriptIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
      </div>
      <div className="grid gap-4">
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <RubyIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <RailsIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
      </div>

      <div className="grid gap-4">
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <CssIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <TailwindIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
      </div>
      <div className="grid gap-4">
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg  p-5 w-25 h-25 ">
              <SaasIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <BootstrapIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
      </div>
      <div className="grid gap-4">
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <GitIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <GithubIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
      </div>
      <div className="grid gap-4">
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <PostgresIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <ReactIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
      </div>
      <div className="grid gap-4">
        <section className="buttons">
          <div className="spin btn thick">
            <div className="flex flex-col justify-between items-between  rounded-lg   p-5 w-25 h-25 ">
              <HtmlIcon />
              <div className="flex justify-end items-center"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GridSkills;
