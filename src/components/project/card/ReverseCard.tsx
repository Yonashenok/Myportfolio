import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { data } from './ProjectCard';
import Github from '../../../assets/icons/Github';
import See from '../../../assets/icons/See';

const ReverseCard = ({ info }: data) => {
  return (
    <Card className="lg:max-w-[48rem] lg:h-[17rem] lg:flex-row group hover:bg-teal-700 overflow-hidden flex flex-col-reverse justify-center items-center bg-white">
      <CardBody className="p-4 flex flex-col  justify-between ">
        <>
          <Typography
            variant="h6"
            color="gray"
            className="mb-1 group-hover:text-white  uppercase"
          >
            {info.title}
          </Typography>
          <Typography
            color="gray"
            className="mb-8 group-hover:text-white font-normal"
          >
            {info.description}
          </Typography>
        </>
        <div className="flex">
          <a href={info.gitLink} target="blank" className="inline-block">
            <Button
              variant="text"
              className="flex items-center text-stone-950 group-hover:text-white gap-2"
            >
              Code
              <Github color="18181b" />
            </Button>
          </a>
          <a href={info.demoLink} target="blank" className="inline-block">
            <Button
              variant="text"
              className="flex items-center text-stone-950 group-hover:text-white gap-2"
            >
              Demo
              <See color="18181b" />
            </Button>
          </a>
        </div>
      </CardBody>
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-100 lg:w-1/4 lg:p-2 group-hover:bg-teal-700    shrink-0 rounded-l-none"
      >
        <img
          src={info.image}
          alt="card-image"
          loading="lazy"
          className="h-full w-full object-contain "
        />
      </CardHeader>
    </Card>
  );
};

export default ReverseCard;
