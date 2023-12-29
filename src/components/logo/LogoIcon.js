// material-ui
import { useTheme } from '@mui/material/styles';

import logoIcon from 'assets/images/logo.png';
import logoIconDark from 'assets/images/logo.png';
import { ThemeMode } from 'config';

// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  const theme = useTheme();

  return (
    <img src={theme.palette.mode === ThemeMode.DARK ? logoIconDark : logoIcon} alt="levate360" width="100" />
  );
};

export default LogoIcon;
