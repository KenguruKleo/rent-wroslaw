import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PrimaryAppBar from './AppBar';
import RentList from './RentList';
import { styled } from '@mui/material/styles';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function App() {
  const [showAll, setShowAll] = React.useState(false)

  return (
    <Box>
      <PrimaryAppBar
        showAll={showAll}
        setShowAll={setShowAll}
      />
      <Offset />
      <Container>
        <Box sx={{ my: 4 }}>
          {/* <Typography variant="h4" component="h1" gutterBottom>
            Rent Wroslaw 2023
          </Typography> */}
          <RentList showAll={showAll} />
        </Box>
      </Container>
    </Box>
  );
}