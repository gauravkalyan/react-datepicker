import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { Grid, TextField, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import dayjs, { Dayjs } from 'dayjs';

export default function BasicDateTimePicker() {
  const [checkInDate, setCheckInDate] = React.useState<Dayjs>(
    dayjs().subtract(8, 'day')
  );
  const [checkOutDate, setCheckOutDate] = React.useState<Dayjs>(
    dayjs().subtract(1, 'day')
  );
  const [isCheckOutOpen, setCheckOutOpen] = React.useState(false);

  const handleCheckInChange = (date: Dayjs | null) => {
    if (date) setCheckInDate(date);
  };

  const handleCheckOutChange = (date: Dayjs | null) => {
    if (date) setCheckOutDate(date);
  };

  const handleCheckInAccept = () => {
    setCheckOutOpen(true);
  };

  const ReadOnlyTextField = (props: any) => <TextField {...props} readOnly />;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={5}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Check-in"
              value={checkInDate}
              onChange={handleCheckInChange}
              maxDate={dayjs().subtract(1, 'day')}
              onAccept={handleCheckInAccept}
              onClose={handleCheckInAccept}
              components={{
                textField: ReadOnlyTextField,
              }}
            />
          </DemoContainer>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="center">
            <ArrowForwardIosIcon />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Check-out"
              value={checkOutDate}
              onChange={handleCheckOutChange}
              minDate={checkInDate.add(1, 'day')}
              open={isCheckOutOpen}
              onOpen={() => setCheckOutOpen(true)}
              onClose={() => setCheckOutOpen(false)}
              components={{
                textField: ReadOnlyTextField,
              }}
            />
          </DemoContainer>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
