import React from 'react';
import {Connection } from '../../components';
import { Object1, Object2 } from './Data';

const Clients = () => {
  return (
    <>
    <Connection {...Object1} />
    <Connection {...Object2} />
    </>
  )
}

export default Clients;