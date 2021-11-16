import React from "react";
import { graphql } from "gatsby";

export default function ArticlesPage({ pageContext, data }) {
  const { currentPage, numPages } = pageContext;

  return (
    <div>
      Hello World
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </div>
  );
}

export const pageQuery = graphql`
  query ALLPostsQueryTpl($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
