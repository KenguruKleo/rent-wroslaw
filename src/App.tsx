import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PrimaryAppBar from './AppBar';
import RentList from './RentList';
import { styled } from '@mui/material/styles';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function App() {
  return (
    <Box>
      <PrimaryAppBar />
      <Offset />
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Rent Wroslaw 21
          </Typography>
          <RentList />
        </Box>
      </Container>
    </Box>
  );
}