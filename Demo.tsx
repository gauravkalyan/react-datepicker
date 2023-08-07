import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Grid } from '@mui/material';

export default function BasicDateTimePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container>
        <Grid item xs={6}>
          <DemoContainer components={['DatePicker']}>
            <DateTimePicker label="Check-in" />
          </DemoContainer>
        </Grid>
        <Grid item xs={6}>
          <DemoContainer components={['DatePicker']}>
            <DateTimePicker label="Check-out" />
          </DemoContainer>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
