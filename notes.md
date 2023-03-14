# Next in a nutshell
These notes summarize key takeaways from the [Next introduction course](https://nextjs.org/learn/foundations/about-nextjs).

## What is Next?
Next is a framework for building React applications. It is a wrapper around React that provides a lot of functionality out of the box. It is a **framework built on top of another framework**!

## Under the hood
Next behaves differently for development and production. In development, Next is a wrapper around React. In production, Next is a wrapper around a static site generator.

## Out of the box
- Next automatically does code splitting, which means that it will only load the code that is needed for the current page.
- Server-side rendering, which means API calls typically made on the client side are made on the server side. This is done to improve performance and SEO.
- <Link> component, which is a wrapper around the <a> tag. It is used to navigate between pages without reloading the entire page. Use an <a> tag for external links.
- <Image> component, which is a wrapper around the <img> tag. It is used to optimize images for performance and SEO.
- <Head> component, which is a wrapper around the <head> tag. It is used to add metadata to the page.
- <Script> component, which is a wrapper around the <script> tag. It is used to add scripts to the page.
- a page in Next is a React component exported from a file in the pages directory and corresponds to a route.