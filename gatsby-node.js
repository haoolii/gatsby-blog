exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query AllPost {
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
  console.log("createPagesss actions", actions);
  const postPerPage = 3;
  const numPages = Math.ceil(data.allMdx.nodes.length / postPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: require.resolve("./src/pages/articles.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

// Create Paginated page for post
