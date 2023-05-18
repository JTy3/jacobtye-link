---
title: 'Deploying NextJS with fl0.com' 
date: '2023-05-17'
description: 'Experience with fl0.com, an Australian based startup providing a DevOps platform that is accessible by developers shared by Jacob Tye - Software Engineer in Sydney, NSW Australia'
---

Deploying your application is one of the most exciting steps of a project. Whether it be deploying to dev so your peers can see your progress, test it out and tell you everything you've done wrong or getting your idea live and into production for the world to see. It is an integral piece to all software projects and like everything there are many ways to go about it.

### What makes for a good deployment platform?

I have always leant towards deployment solutions that compliment the developer experience more than hinder it. There is certainly something to be said about DevOps as a skill and some of my most talented peers are DevOps Engineers. If you are in an organisation that has strict rules for infrastructure and a focus on the details of how your resources are deployed; you may disagree with a lot of what I am about to say. However, if your focus is time to market and quickly iterating with limited resources - you will find value in a deployment platform that lets you ship with minimal effort.

This is why I think platforms like Vercel do so well. You build a React/NextJS app, connect it to Vercel and it all just works with some environmental variables as the only thing left to configure. Every time you merge to dev you see the new version of your app up and running within a few minutes and that is a solid product.

### The beauty of Containers

> "It works on my machine, why not in UAT??"

> "Just ship your machine then"

Containerising workflows is nothing new and the ability to run a quick docker command to get the same image, packages and build as all your peers is absolutely priceless.

But by the time you build your Docker image, store it in a registry and then deploy your service to a cluster - assuming you have stuck up the effort to create and maintain said cluster, you have spent a lot of time and you have also presumably learnt a whole new skill set.

I don't think I am alone in saying there are joys in developing with Docker but deploying containers is another skillset. I know plenty of people that can run a Dockerfile and write their code but I don't know many that can do that and ship their code to a production ready cluster. This brings us back to my first point which is when we want to spend as much time as possible iterating on our ideas and actually building, we go looking for solutions to help us out.

### Introducing fl0.com

I was introduced to the team at fl0 earlier in the year when I started my current role with Butter. They are a friendly team and have helped Butter out a lot with their MVP and were looking after the infrastructure for our API and Database services. 

They were a busy team but had taken the time to get a neat codebase in place for me to walk into in what I can tell was a chaotic few months for all involved. Their product was a neat and tidy Web UI that let you deploy Node and Postgres services in a few clicks. Whilst I appreciated the simplicity of the fl0 app it was still in beta and there were a few things to be done - one thing I really wanted to see was a way to deploy my frontend as well. In a world of Jamstacks, I was keen to see a version of fl0 where you got to choose your own stack but of course, you have to start somewhere and Node and Postgres is a fair place to start. 

Well about 2 weeks ago fl0 announced their new site and early access by quite literally saying 'New site, who dis'. No I'm not joking look [here.](https://www.linkedin.com/feed/update/urn:li:activity:7057516347970260992/) 

I wanted to jump in and take a look and it is fair to say I see the vision and I am here for it.

### What is this new fl0 all about?

I think it is fair to say James from fl0 got me through my first two weeks at Butter, showing me all the codebase, answering dumb questions I had and just all around making sure my team and I didn't fall flat on our face. Unfortunately for James, my messages still haven't stopped and range from questions about code solutions all the way to the best time to go skiing in Vancouver (sorry mate). 

So this week, after reading the [fl0 docs](https://docs.fl0.com/getting-started/preparing-your-codebase) that said you could now write a Dockerfile in the root of your project and fl0 will deploy your app as per the Dockerfile. I asked James "Reckon I can get a Next app running?" to which he replied "In theory you could". So I thought in famous last words "How hard could it be" and got to work.

I really wish I could tell you that what followed proves myself and makes all the hours I have spent behind a computer worth it but it doesn't at all. It proved that in 5 minutes even I could get an app running based off a Dockerfile provided by NextJS - which is a testament to how right fl0 have got this iteration.

    FROM node:18-alpine AS base
    
    # Install dependencies only when needed
    FROM base AS deps
    RUN apk add --no-cache libc6-compat
    WORKDIR /app
    COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
    RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi
    
    # Rebuild the source code only when needed
    FROM base AS builder
    WORKDIR /app
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    RUN npm run build

    # Production image, copy all the files and run next
    FROM base AS runner
    WORKDIR /app
    ENV NODE_ENV production
    RUN addgroup --system --gid 1001 nodejs
    RUN adduser --system --uid 1001 nextjs
    
    COPY --from=builder /app/public ./public
    COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
    COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
    
    USER nextjs

    EXPOSE 80
    
    ENV PORT 80
    
    CMD ["node", "server.js"]

The only difference between the above Dockerfile and the [recommended NextJS file](https://docs.fl0.com/getting-started/preparing-your-codebase) is the ports (80 in my version instead of 3000) and the package manager (npm instead of yarn). If the port thing is really bothering you all you need to do if set the port environment variable in fl0 to whatever you have specified as your container port. It is really that simple.

Learn DevOps - it is a great skill. Learn Docker, learn Kubernetes and I really hope you have as much fun as I have with it. But if DevOps isn't of interest or you don't have the time to spend on allocating and maintaining your own resources; give an Australian based company a go and try out fl0. If you have read this blog post the whole way through, you are the best. But you have also spent the same amount of time it takes to get your app up and running and I think that is enough motivaton to give it a crack next time your looking for a deployment platform.

Cheers!

Jacob