import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Seo } from "./seo.js";
import { useState } from "react";

export default function Layout({
  children,
  title = false,
  description = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [mobileNav, setMobileNav] = useState(false);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <div className="py-8 lg:py-16 px-6 md:px-16 lg:px-24">
        <div className="relative z-20 flex justify-between items-center">
          <div className="flex md:block lg:flex items-center max-w-full">
            <div className="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12">
              <a className="flex items-center no-underline">
                <img
                  src="https://avatars.githubusercontent.com/u/18097266"
                  alt=""
                  className="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
                />
              </a>
            </div>
            <div>
              <div></div>
              <a
                href="/"
                className="block text-black no-underline text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight"
              >
                Hao Li
              </a>
              <div className="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs space-x-6">
                <Link
                  to="/articles"
                  className="font-semibold no-underline text-gray-400 hover:text-black"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Articles
                </Link>
                <Link
                  to="/about"
                  className="font-semibold no-underline text-gray-400 hover:text-black"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <button className="block" onClick={() => setMobileNav(!mobileNav)}>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="block text-black h-6 w-6"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>{" "}
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="text-black h-6 w-6 hidden"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
              </svg>
            </button>
          </div>
        </div>
        {mobileNav ? (
          <div className="md:hidden z-10 bg-white fixed pin pt-24 block top-0 left-0 h-full w-full">
            <div className="space-y-8 pt-6 pb-8 px-12 max-h-full">
              <Link
                to="/articles"
                className="block text-gray-400 hover:text-black font-bold no-underline "
                activeClassName="active"
                partiallyActive={true}
              >
                Articles
              </Link>
              <Link
                to="/about"
                className="block text-gray-400 hover:text-black font-bold no-underline"
                activeClassName="active"
                partiallyActive={true}
              >
                About
              </Link>
            </div>
          </div>
        ) : null}
        <div className="lg:pl-32 mt-12">
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
