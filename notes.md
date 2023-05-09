# Next in a nutshell
These notes summarize key takeaways from the [Next introduction course](https://nextjs.org/learn/foundations/about-nextjs).

## What is Next?
Next is a framework for building React applications. It is a wrapper around React that provides a lot of functionality out of the box. It is a **framework built on top of another framework**!

## Under the hood
Next behaves differently for development and production. In development, Next is a wrapper around React. In production, Next is a wrapper around a static site generator.

## Out of the box
- Next automatically does code splitting, which means that it will only load the code that is needed for the current page.

- Server-side rendering, which means API calls typically made on the client side are made on the server side. This is done to improve performance and SEO.

- `<Link>` component, which is a wrapper around the `<a>` tag. It is used to navigate between pages without reloading the entire page. Use an `<a>` tag for external links.

- `<Image>` component, which is a wrapper around the `<img>` tag. It is used to optimize images for performance and SEO.

- `<Head>` component, which is a wrapper around the `<head>` tag. It is used to add metadata to the page.

- `<Script>` component, which is a wrapper around the `<script>` tag. It is used to add scripts to the page.

- a page in Next is a React component exported from a file in the pages directory and corresponds to a route.

- `_app.js` is a special file that is used to initialize pages. It is used to initialize things that are common to all pages, such as layout and sets up global state management.

- `layout.js` is used to define the layout of a page, such as adding a header, navbar and footer. It also styles the layout page and autmatically creates unique class names to avoid conflicts.

- importing CSS files as modules is supported. This is done by adding the `module` keyword to the CSS file name. For example, `styles.module.css`.

- Static Generation is used to generate HTML at build time. It is used for pages that do not need to be updated frequently. It is also used for pages that do not need to fetch data from an external API.

- Server-side Rendering is used to generate HTML on each request. It is used for pages that need to fetch data from an external API.

- `getStaticProps` is used to fetch data at build time for static generation. It is used to fetch data from an external API and pass it to a page as props