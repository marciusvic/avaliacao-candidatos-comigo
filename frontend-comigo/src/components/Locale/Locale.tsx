import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const Locale = () => {
  return (
    <div>
      <div className="flex justify-start items-center p-4 bg-comigo-gray">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className="text-gray-600"
        >
            <HomeIcon className="mr-2" />
            Home
          <Typography color="textPrimary" className="text-gray-700">Atendimento ao cliente</Typography>
        </Breadcrumbs>
      </div>
      <div className="w-full h-px bg-comigo-divisor"></div>
    </div>
  );
};
