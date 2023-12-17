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
    <Card className="max-w-[48rem] h-[17rem] flex-row overflow-hidden bg-white">
      <CardBody className="p-4 flex flex-col justify-between ">
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
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-l-none"
      >
        <img
          src={info.image}
          alt="card-image"
          className="h-full w-full object-contain "
        />
      </CardHeader>
    </Card>
  );
};

export default ReverseCard;
