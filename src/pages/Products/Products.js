import React from 'react';
import { Object1, Object2, Object3 } from './Data';
import { Connection, Feature } from '../../components';

const Products = () => {
  return (
    <>
    <Feature {...Object1} />
    <Connection {...Object2} />
    <Connection {...Object3} />
    </>
  )
}

export default Products