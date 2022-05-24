<h1 align="center">Cocoa Directory</h1>
<div align="center">
  <a href="https://cocoa.directory/">
    https://cocoa.directory
  </a>
</div>
<p align="center">Cocoa Directory is a website where you can see all the libraries that about iOS/macOS/Objective-C/Swift.</p>

## How do I know I'm at the right place?

- You made a repository on GitHub and you want the world to know it works with iOS/macOS.
- You want to submit a pull request to improve Cocoa Directory or libraries dataset.
- You want to report a bug or make a suggestion.


## How do I add a library?

- Add it at the end of `cocoa-libraries.json` file.
- Submit a PR.

Please follow format, fields order and indentation as seen below, skip any of the `false` values and do not fill optional fields, unless it's necessary.

```json
{
  "githubUrl": "<GITHUB REPOSITORY URL>"
}
```

### Library fields description

#### ⚙️ General

- #### ❗ `githubUrl` **(required)**
  **(string)** - URL to the package GitHub repository (currently other Git hosts are not supported).
 
 
## How do I run my own version locally?

#### Prerequisites

- Node LTS

#### Commands

```sh
yarn && yarn start
```

You should be able to visit `localhost:3000` in your browser.

## How do I deploy to production?

Get a commit on `main` and it will be automatically deployed.

## Others

Cocoa Directory inspired by [React Native Directory](https://reactnative.directory/), thanks.
