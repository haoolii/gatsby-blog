import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";

export default function ArticlesPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            description
            date(fromNow: true, locale: "tw")
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  return (
    <Layout
      title="About This Site"
      description="More infomation about this site."
    >
      <h1 className="text-2xl font-extrabold text-black mb-4">Articles</h1>

      <div className="text-lg text-grey-darkest leading-normal spaced-y-6">
        <p>
          Over the years I’ve published a few dozen articles — some more
          noteworthy than others.{" "}
        </p>{" "}
        <p>Here are some of my personal favorites.</p>
      </div>

      <div className="mt-12 space-y-10">
        {posts.map((post) => (
          <div key={post.id}>
            <div>
              <Link
                to={'../' + post.slug}
                className="text-lg text-black font-bold no-underline hover:underline"
              >
                {post.frontmatter.title}
              </Link>
            </div>
            <p className="text-grey-darkest text-base leading-normal mt-1">
              {post.frontmatter.description}
            </p>
            <div className="text-grey-darkest text-base leading-normal mt-2">
              <Link
                className="text-grey-darker hover:text-black text-sm no-underline hover:underline"
                to={'../' + post.slug}
              >                
                Read this article →{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
