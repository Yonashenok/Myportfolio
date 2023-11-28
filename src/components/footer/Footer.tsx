import { Typography } from '@material-tailwind/react';

export function Footer() {
  return (
    <footer className="container flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-gray-700 py-6 px-6 text-center md:justify-between">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-stone-200 hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-stone-200 hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-stone-200 hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-stone-200 hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
      <Typography color="blue-gray" className="font-normal text-stone-200">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
}
