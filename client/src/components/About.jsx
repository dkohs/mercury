import React from "react";
import { Container, Typography, Avatar, Box } from "@mui/material";

export const About = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={4}
      >
        <Typography variant="h4" gutterBottom>
          {`About Us`}
        </Typography>
        <Typography variant="body1" color="textSecondary" >
          {`In today's society, unhealthy habits have grown especially problematic, with heart issues becoming especially relevant.`}
        </Typography>
        <Typography variant="body1" color="textSecondary" >
          {`The goal with Mercury is to provide a convenient method for worried individuals to formulate a defined understsanding on whether their health may actually be at risk of a cardiovascular disease. Similar to that of a BMI test, the results given by our application do not objectively represent one's risk but rather a metric to estimate your level of health. _This form is not applicable to any legal, scientific, or commercial uses_`}
        </Typography>
      </Box>
    </Container>
  );
};
