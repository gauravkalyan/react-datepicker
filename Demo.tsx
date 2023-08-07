import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { Grid } from '@mui/material';

export default function BasicDateTimePicker() {
  const [checkInDate, setCheckInDate] = React.useState(
    dayjs().subtract(7, 'day')
  );
  const [checkOutDate, setCheckOutDate] = React.useState(dayjs());
  const [isCheckOutOpen, setCheckOutOpen] = React.useState(false);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    setCheckOutOpen(true); // Open the "Check-out" date picker
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container>
        <Grid item xs={6}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Start-Date"
              value={checkInDate}
              onChange={handleCheckInChange}
              maxDate={dayjs()} // restrict future dates
            />
          </DemoContainer>
        </Grid>
        <Grid item xs={6}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="End-Date"
              minDate={checkInDate}
              maxDate={dayjs()} // restrict future dates
              value={checkOutDate}
              onChange={(date) => {
                setCheckOutDate(date);
                setCheckOutOpen(false); // Close after selecting a date
              }}
              open={isCheckOutOpen}
              onDismiss={() => setCheckOutOpen(false)} // Close when dismissed
            />
          </DemoContainer>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
