import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating({ rating }) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(rating);
  }, [rating]);

  return (
    <>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Average Rating</Typography>
        {rating ? (
          <Rating name="read-only" value={value} readOnly />
        ) : (
          <Rating name="no-value" value={0} readOnly />
        )}
      </Box>
    </>
  );
}

// <Box
// sx={{
//   '& > legend': { mt: 2 },
// }}
// >
// <Typography component="legend">Controlled</Typography>
// <Rating
//   name="simple-controlled"
//   value={value}
//   onChange={(event, newValue) => {
//     setValue(newValue);
//   }}
// />
// <Typography component="legend">Read only</Typography>
// <Rating name="read-only" value={value} readOnly />
// <Typography component="legend">Disabled</Typography>
// <Rating name="disabled" value={value} disabled />
// <Typography component="legend">No rating given</Typography>
// <Rating name="no-value" value={null} />
// </Box>
