import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AxiosError } from 'axios';
import React from 'react';

interface ErrorResponseProps {
  error?: AxiosError;
  stringMessage?: string;
}

export const ErrorResponse: React.FC<ErrorResponseProps> = ({
  error,
  stringMessage,
}) => {
  return (
    <Grid>
      <Typography
        variant="h3"
        color="error"
        textAlign="center"
        sx={{
          marginBottom: '20px',
        }}
      >
        Oops! Something went wrong!
      </Typography>
      <Typography variant="h4" color="primary" textAlign="center">
        {stringMessage ? stringMessage : error?.message}
      </Typography>
    </Grid>
  );
};
