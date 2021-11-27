import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About This Site"
      description="More infomation about this site."
    >
      <article className="prose lg:prose-lg">
      <h2>About this blog</h2>
        <p>
          Hi I'm Hao, I'm a frontend engineer. This is my blog. It built by Gatsby.
        </p>
        <p>
          Angular, Tailwindcss, D3js, React, Nodejs, blockchain
        </p>

        <ul>
          <li><a href="https://github.com/unnhao" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/hao-li-0ab593130/" target="_blank">LinkedIn</a></li>
        </ul>
      </article>

      <div className="mt-8">
        <Link to="/">Go Home</Link>
      </div>
    </Layout>
  );
}
