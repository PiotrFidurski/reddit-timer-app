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
<img src="https://imgur.com/a/ZjtgTku" align="center" />
    </td>
    <td align="right">
<img src="https://imgur.com/a/3CKYesj" align="center" />
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
