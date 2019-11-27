import React from 'react';
import { Typography, Container } from '@krowdy-ui/core';

export default function FixedContainer() {
  return (
    <Container fixed>
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
    </Container>
  );
}
