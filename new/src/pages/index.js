import React from 'react';

import Container from '../components/Container';
import Image from '../components/image';
import SEO from '../components/SEO';

import 'typeface-roboto';

const IndexPage = () => (
  <Container>
    <SEO />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Container>
);

export default IndexPage;
