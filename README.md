# AP Calculus AB Review 

This website is a collection of all my (simplier) notes and resources for AP Calculus AB. It is a work in progress, and I will be adding more content as I go.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://www.mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Repo Overview

- `- `pages/unit[]/` - Contains 2 files `[slug].js` and `main.js`. The slug file is to render the static mdx file using [mdx-next-remote](https://github.com/hashicorp/next-mdx-remote) and main file is to display the collection of notes and files in that unit
- `layout/content` - Creates the layout of the how the mdx file is rendered
- `components/` - Contains all the components used in the website, most created for the custom components that's being used in the mdx file itself
- `content/*` - Contains all the mdx files for the notes and resources, spereated into units for efficiency
- `lib/mdx` - Gets static mdx files from a location (in this case locally), infuses the MDXComponents and bundles it into frontMatter
- `pages/*` - All other static pages.