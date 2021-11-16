import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";

export default function ArticlesPage({ pageContext, data }) {
  // const data = useStaticQuery(graphql`
  //   query GetBlogPosts {
  //     allMdx(
  //       sort: { fields: frontmatter___date, order: DESC}
  //     ) {
  //       nodes {
  //         id
  //         slug
  //         frontmatter {
  //           title
  //           description
  //           date(fromNow: true, locale: "tw")
  //         }
  //       }
  //     }
  //   }
  // `);

  const { currentPage, numPages } = pageContext;

  const posts = data.allMdx.edges;
  return (
    <Layout
      title="About This Site"
      description="More infomation about this site."
    >
      <h1 className="text-2xl font-extrabold text-black mb-4">Articles</h1>

      <div className="text-lg text-grey-darkest leading-normal spaced-y-6">
        <p>
          Over the years I’ve published a few dozen articles — some more
          noteworthy than others.
        </p>
        <p>Here are some of my personal favorites.</p>
      </div>

      <div className="mt-12 space-y-10">
        {posts.map(({ node }) => (
          <div key={node.id}>
            <span className="text-xs font-semibold text-gray-400">
              {new Date(node.frontmatter.date).toLocaleDateString()}
            </span>
            <div>
              <Link
                to={"/" + node.slug}
                className="text-lg text-black font-bold no-underline hover:underline"
              >
                {node.frontmatter.title}
              </Link>
            </div>
            <p className="text-grey-darkest text-base leading-normal mt-1">
              {node.frontmatter.description}
            </p>
            <div className="text-grey-darkest text-base leading-normal mt-2">
              <Link
                className="text-grey-darker hover:text-black text-sm no-underline hover:underline"
                to={"/" + node.slug}
              >
                Read this article →{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center md:justify-start my-14">
        <nav aria-label="Page navigation">
          <ul className="inline-flex space-x-2">
            <li>
              <Link
                to={`/articles/${currentPage - 1 <= 1 ? "" : currentPage - 1}`}
              >
                <button className="flex items-center justify-center w-8 h-8 text-gray-400 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gray-100">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
            </li>
            {Array.from({ length: numPages }).map((_, i) => (
              <li key={i}>
                <Link to={`/articles/${i === 0 ? "" : i + 1}`}>
                  {i + 1 === currentPage ? (
                    <button className="w-8 h-8 text-white text-xs transition-colors duration-150 bg-gray-400 border border-r-0 border-gray-400 rounded-full focus:shadow-outline font-semibold">
                      {i + 1}
                    </button>
                  ) : (
                    <button className="w-8 h-8 text-gray-400 text-xs transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-gray-100 font-semibold">
                      {i + 1}
                    </button>
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={`/articles/${
                  currentPage + 1 > numPages ? currentPage : currentPage + 1
                }`}
              >
                <button className="flex items-center justify-center w-8 h-8 text-gray-400 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-100">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </Layout>
  );
  // const { currentPage, numPages } = pageContext;

  // return (
  //   <div>
  //     Hello World
  //     <pre>{JSON.stringify(pageContext, null, 2)}</pre>
  //   </div>
  // );
}

export const pageQuery = graphql`
  query ALLPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`;
