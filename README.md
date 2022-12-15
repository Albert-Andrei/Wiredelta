## Summary

There are several approaches to implementing a Pokermon Database viewer. I initially considered using pagination, as the API I was using supported it. However, I needed to perform specific filter queries, and the API did not support filtering (at least I didn't find). As a result, I decided to fetch all the data, which allowed me to perform any query I needed. However, fetching all the data takes a long time and is not the most efficient solution.

In summary, there were many small design differences that made the implementation quite time-consuming. I believe I identified and addressed most of them, but there are still some that I didn't get to. I marked these as @TODO for future reference.

To improve performance, techniques like static-site generation (SSG) and stale-while-revalidate (SWR) can be used for fetching and caching data. 

To see the deployed version open [https://wiredelta.vercel.app/](https://wiredelta.vercel.app/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
