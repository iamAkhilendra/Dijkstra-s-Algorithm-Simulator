import React from 'react';
import Grid from './Grid';
import ControlPanel from './ControlPanel';
import './Simulator.css';

export default function Simulator() {
  return (
    <div className= 'simulation-box'>
        <Grid></Grid>
        <ControlPanel></ControlPanel>
    </div>
  )
}
