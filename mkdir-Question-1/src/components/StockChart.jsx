import React, { useEffect, useState } from 'react';
import { Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';

const StockChart = () => {
  const [stocks, setStocks] = useState({});
  const [selectedStock, setSelectedStock] = useState('');

  useEffect(() => {
    axios.get('http://20.244.56.144/evaluation-service/stocks/NVDA')
      .then(res => {
        setStocks(res.data.stocks);
        setSelectedStock(Object.values(res.data.stocks)[0]);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Typography variant="h5">Stock Chart</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Select Stock</InputLabel>
        <Select
          value={selectedStock}
          label="Select Stock"
          onChange={(e) => setSelectedStock(e.target.value)}
        >
          {Object.entries(stocks).map(([name, code]) => (
            <MenuItem key={code} value={code}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {
        
      }
    </div>
  );
};

export default StockChart;