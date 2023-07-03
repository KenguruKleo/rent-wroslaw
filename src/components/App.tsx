import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PrimaryAppBar from './AppBar';
import RentList from './RentList';
import { styled } from '@mui/material/styles';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function App() {
  const [showAll, setShowAll] = React.useState(false)
  const [refreshedOn, setRefreshedOn] = React.useState(new Date().getTime())

  return (
    <Box>
      <PrimaryAppBar
        showAll={showAll}
        setShowAll={setShowAll}
        setRefreshedOn={setRefreshedOn}
      />
      <Offset />
      <Container>
        <Box sx={{ my: 4 }}>
          <RentList showAll={showAll} refreshedOn={refreshedOn} />
        </Box>
      </Container>
    </Box>
  );
}