/**
 * This file is helpful for debugging issues with scripts
 * Run it with `npx babel-node test.js`
 */

import { fetchGithubData, fetchGithubRateLimit } from './fetch-github-data';

async function getRateLimit() {
  const info = await fetchGithubRateLimit();
  console.log(info);
}

async function getRepoInfo() {
  const info = await fetchGithubData({
    githubUrl: 'https://github.com/expo/ex-navigation',
  });
  console.log(JSON.stringify(info));
}

getRateLimit();
getRepoInfo();
