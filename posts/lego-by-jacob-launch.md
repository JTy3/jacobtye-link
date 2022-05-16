---
title: 'Lego by Jacob Launch!' 
date: '2022-05-14'
description: 'Kicking off one of the projects outlined this years roadmap. Beta version of Lego By Jacob built in NextJS with a MySQL Database holding all the data needed.'
---
I have done it! I have kicked off a project and have semi comitted myself to it over the last few weeks. I have built a [Lego Catalog App](https://www.legobyjacob.com/) (might need a better name but this is fine for now) that I talked about in my [last post](/posts/roadmap-2022) and, whilst still very much in beta, I am very happy with how it is progressing. 

I intend to have this repo totally public so people can make suggestions to my code, report any issues and hopefully learn from what I am doing. If you have a spare few minutes, please feel free to go and take a look at the repo [here](https://github.com/JTy3/lego-by-jacob). Any comments, feedback, feature requests or stars means so much to me!

Now why did I build this? I built this app for a few reasons but the simplest would be; I like Lego. I have had friends say to me things like 'isn't there something that already does this?' and they would be right there absolutely is and I would suggest anyone reading this go and take a look at the site [Rebrickable.com](https://rebrickable.com/) as they have done a lot of work on this kind of app and they also have an incredible community around the topic of MOC (My Own Creations) who share designs, instructions and discussions about creations that I just find absolutely mind blowing.

But more than liking Lego I wanted a channel to show off what I could do to the wider software community, meet some new people and trial some technologies that might not fit in at work. If anyone actually uses the app to find parts for their kits, discover new sets, find new minifigs or become connected to a community - well that is just an excellent bonus to me.

### Technical Approach

I have been checking out [NextJS](https://nextjs.org/) for a while now and threw myself at it to build the app you are on now. But another thing I wanted to try was TypeScript, so I decided for my Lego app I would use NextJS with TypeScript and it has been fun so far with a few learning curveballs along the way.

The people at [Rebrickable](https://rebrickable.com/) actually host a series of csv files and let you download them for any purpose right here and if you are wanting to pick up this kind of project I really recommend checking their data out [here](https://rebrickable.com/downloads/). It has so far been quite clean, all mappings and testing I have done seems correct and they have done an all round great job of sourcing the data. I downloaded these and built a MySQL Database to use as my data store. I pondered with going to MongoDB for this but I landed on MySQL as it is something I am quite exposed to and the database decision wasn't the focus of this project. If this is something people are interested in I would be happy to look into this further!

**Pro Tip:** do not even think about trying the import wizard in MySQL Workbench - I sat there for 4 hours whilst one csv imported and thought there has to be a better way and sure enough there is a SQL command you can run that cuts down the time by an unbelievable amount. [Check out this great resource](https://phoenixnap.com/kb/import-csv-file-into-mysql).

From here I got to work on the structural side of the app - setting my folder directories and finding my bearing on how to store components, pages, etc. I have found this to be of great importance in every project I have done. You really need to set and define a clear path and follow it, things get messy quick and after a number of years untangling legacy code that got out of hand I can tell you a good, well thought out, easy to understand structure goes a long way in making your codebase future proof.

The first thing I figured I would tackle was themes. I used getStaticProps() method and parsed a theme ID to the server to go and retrieve all sets from the DB belonging to that theme. This took a little bit of time and getting used to but got there in the end with a lot of reference to [Vercel's documentation on NextJS](https://nextjs.org/). I then pushed my code to Git and hooked the repo up to AWS Amplify for deployment. I landed on Amplify only because I am proficient in AWS in general and felt most comfortable with it, given what I wanted to do right now I decided against Jenkins because Amplify seemed to handle the deployment efficiently and cost effectively. I did notice in the logs, however, Amplify installs a lot of 'bloatware' in its standard deploy and build scripts (installing .NET, Python, etc.) I guess if I ever felt that was slowing things down I might use Jenkins to spin up a barebones EC2 for deployment. But for now, this is good.

After hitting the big deploy button I noticed a lot of TypeScript errors stopping the build. This was a humbling but good practice I would recommend giving a go as it opens your eyes to a few shortcuts normal JS lets you get away with.

Next steps are to build out part lists and I would just say watch this space. I am just writing my first few semi technical blog posts so feel free to let me know if you want these to be more or less in depth.

Cheers!

Jacob