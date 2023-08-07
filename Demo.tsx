import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { Grid, IconButton, TextField } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function BasicDateTimePicker() {
  const [checkInDate, setCheckInDate] = React.useState(
    dayjs().subtract(7, 'day')
  );
  const [checkOutDate, setCheckOutDate] = React.useState(dayjs());
  const [isCheckOutOpen, setCheckOutOpen] = React.useState(false);
  const [shouldOpenCheckout, setShouldOpenCheckout] = React.useState(false);

  const ReadOnlyTextField = (props) => <TextField {...props} readOnly />;

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    setShouldOpenCheckout(true);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={5}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Check-in"
              value={checkInDate}
              onChange={handleCheckInChange}
              maxDate={dayjs().subtract(1, 'day')}
              components={{
                textField: ReadOnlyTextField,
              }}
              onClose={() => {
                if (shouldOpenCheckout) {
                  setCheckOutOpen(true);
                  setShouldOpenCheckout(false);
                }
              }}
            />
          </DemoContainer>
        </Grid>
        <Grid item>
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
        <Grid item xs={5}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Check-out"
              minDate={checkInDate}
              maxDate={dayjs()}
              value={checkOutDate}
              onChange={(date) => {
                setCheckOutDate(date);
              }}
              open={isCheckOutOpen}
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
