import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      sx={{
        width: {
          xs: "100%",
          md: "75%",
        },
      }}
    >
      {value === index && (
        <Box sx={{ pl: "2rem" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
