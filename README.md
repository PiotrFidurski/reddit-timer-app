# Reddit Timer App

## Table of Contents

<details>
<summary>Click to expand</summary>
  
- [Introduction](#introduction)  
  
- [Environment Variables](#environment-variables)

- [Credits](#credits)

</details>

## Introduction

Welcome to [Reddit Timer App](https://reddit-timer-app.vercel.app/) where you can
search for any existing [Reddit](https://www.reddit.com/) subreddit and it will generate heatmap based on the results. The data comes from [Pushshift api](https://pushshift.io/api-parameters/) and
it contains 300 submissions from last year to now, sorted by the score (Reddit's upvote system). It is possible to click on each square in the heatmap and view some information about submissions, you can also sort them by comments, date and score. This project was heavily inspired by free plan of [profy.dev](https://profy.dev/project/reddit-timer), where you can learn professional dev workflow and more. It's built with [next.js](https://nextjs.org/) and features libraries like [framer-motion](https://www.framer.com/docs/) for sorting animations, [styled-components](https://styled-components.com/) for styling.

<table>
  <tr>
    <td align="left">
        <img src="https://user-images.githubusercontent.com/32775962/140656002-e3f8a400-74f3-41b2-9a7b-976fe8fccb1d.jpg" align="center" />
    </td>
    <td align="right">
        <img src="https://user-images.githubusercontent.com/32775962/140656017-f68d0022-add7-4edc-921b-d098a66fa05c.jpg" align="center" />
    </td>
  </tr>
  <tr>
    <td align="left">
        <img src="https://user-images.githubusercontent.com/32775962/140656064-2203ee0b-5890-4db2-9b5d-355482fc1db4.jpg" align="center" />
    </td>
  </tr>
</table>

## Environment variables

| Name          | Description       | Example                                              |
| ------------- | ----------------- | ---------------------------------------------------- |
| PUSHSHIFT_URL | pushshift API uri | `https://api.pushshift.io/reddit/search/submission/` |

## Deploy this yourself

- Clone to your computer.

  - `clone this repo`

  - `cd reddit-timer-app`

  - `npm install`

- Create .env.local in the root directory of your project, add env variables required.

- Start a dev server

  - `npm run dev`

- Run integration tests

  - `npm run test`

- Run e2e tests

  - `npx cypress run`
  - `npx cypress open`

## Credits

- Homepage Illustrations

  - [lukaszadam](https://lukaszadam.com/illustrations)

- [inspired by](https://profy.dev/project/reddit-timer)
- [pushshift](https://pushshift.io/)
- [vector art](https://iconmonstr.com/)

## Known issues

There might be a scenario where one heatmap square has 20+ submissions (for example when searching for "web") and as you'll notice alot of these will have the same title, however they aren't duplicate submissions,
the list uses `submission.id` as key and these are all unique submissions, apparently Reddit had a bug last year where it would post one submission more than once, it is only the case for lesser known subreddits.
