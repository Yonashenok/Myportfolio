import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import Github from '../../../assets/icons/Github';
import See from '../../../assets/icons/See';

export type data = {
  info: {
    title: string;
    image: string;
    description: string;
    demoLink: string;
    gitLink: string;
  };
};

const ProjectCard = ({ info }: data) => {
  return (
    <Card className="lg:max-w-[48rem] lg:h-[17rem] lg:flex-row flex flex-col justify-center items-center">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-100 lg:w-2/5 shrink-0 rounded-r-none"
      >
        <img src={info.image} className="h-full object-fill  w-full" />
      </CardHeader>
      <CardBody className="p-4 flex flex-col justify-between">
        <>
          <Typography variant="h6" color="gray" className="mb-1 uppercase">
            {info.title}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            {info.description}
          </Typography>
        </>
        <div className="flex">
          <a href={info.gitLink} target="blank" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Code
              <Github color="18181b" />
            </Button>
          </a>
          <a href={info.demoLink} target="blank" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Demo
              <See color="18181b" />
            </Button>
          </a>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
