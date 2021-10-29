import Box from '@mui/material/Box';
function Header(props) {
  const letters = props.letters;

  return <Box sx={{ fontSize: '30px' }}>{letters}</Box>;
}
export default Header;
