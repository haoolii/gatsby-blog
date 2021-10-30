import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';


export default function AboutPage() {
  return (
    <Layout
      title="About This Site"
      description="More infomation about this site."
    >
      <h1>Page not found</h1>
      <Link to="/">Go Home</Link>
    </Layout>
  );
}
