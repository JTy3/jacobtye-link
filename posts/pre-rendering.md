---
title: 'Two Forms of Pre-rendering' 
date: '2022-04-27'
description: 'Tutorial generated article by Vercel from https://nextjs.org/learn/basics/create-nextjs-app'
---

**Dislaimer:** This article was written by [Vercel](https://vercel.com/) and was included in their tutorial for [Create a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app). NextJS alleviates a lot of pain points I have had with React and I can thoroughly recommend their tutorial to get you started in NextJS.

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.