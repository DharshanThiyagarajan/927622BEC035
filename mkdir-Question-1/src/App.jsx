import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import StockChart from './components/StockChart';
import CorrelationHeatmap from './components/CorrelationHeatmap';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Stock Evaluation Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/">Stock Chart</Button>
          <Button color="inherit" component={Link} to="/heatmap">Correlation Heatmap</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<StockChart />} />
          <Route path="/heatmap" element={<CorrelationHeatmap />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;