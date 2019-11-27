import React from 'react';
import { Typography, Container } from '@krowdy-ui/core';

export default function SimpleContainer() {
  return (
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
    </Container>
  );
}
