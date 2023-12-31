import { Card, CardBody, Typography } from '@material-tailwind/react';
import EmailIcon from '../../../assets/icons/EmailIcon';
import Location from '../../../assets/icons/Location';
import Phone from '../../../assets/icons/Phone';

export function InfoCard() {
  return (
    <Card className="mt-6 md:w-96 p-2  lg:p-4">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          What is your plan ? Call me
        </Typography>
        <Typography className="font-normal text-lg">
          You can get my contact information here and if you like, you can see
          the urls of my pages on social networks from the top of the page and
          find me there.
        </Typography>
        <CardBody className="p-0 mt-4">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <Location />
              </span>
              <Typography className="font-normal">
                Addis Ababa, Ethiopia
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <EmailIcon />
              </span>
              <Typography className="font-normal">
                yonashenok24@gmail.com
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <Phone />
              </span>
              <Typography className="font-normal">+251 942547185</Typography>
            </li>
          </ul>
        </CardBody>
      </CardBody>
    </Card>
  );
}
