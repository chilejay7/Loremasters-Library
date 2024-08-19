import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2} className='avatar'>
       <Avatar alt="Cindy Baker" src="/icon_cropped.png" />
    </Stack>
  );
}
