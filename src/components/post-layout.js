import * as React from "react";
import Layout from "./layout";

export default function PostLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter;
  return (
    <Layout title={title} description={description}>
      <div className="container container-lg">
        <article>
          <header>
            <h1 className="text-4xl font-bold leading-tight mb-8">
              {title}
            </h1>
          </header>
          <div className="prose md:max-w-4xl">
            {children}
          </div>
        </article>
      </div>
    </Layout>
  );
}
