import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  height: 60,
  lineHeight: '60px',
  marginLeft:'80%',
  marginBlock:'20px',

}));

const darkTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation() {
  const sum = useSelector(state => state.totalAmount); // קריאה לערך sum מה-Redux state
  return (
    <Grid container spacing={2}>
      {[24].map((elevation) => (
        <Grid item xs={6} key={elevation}>
          <ThemeProvider theme={darkTheme}>
            <Box

            >
              <Item elevation={elevation}>
                {`סה"כ לתשלום=${sum}`}
              </Item>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
