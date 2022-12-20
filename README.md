[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video) &nbsp; [![badge](https://img.shields.io/github/stars/apivideo/api.video-readmeio-document-sync-action?style=social)](https://github.com/apivideo/api.video-readmeio-document-sync-action) &nbsp; [![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)
![](https://github.com/apivideo/.github/blob/main/assets/apivideo_banner.png)
<h1 align="center">readmeio-document-sync-action</h1>

[api.video](https://api.video) is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.

# Table of contents

- [Table of contents](#table-of-contents)
- [Project description](#project-description)
- [Documentation](#documentation)
  - [Inputs](#inputs)
      - [`document-slug`](#document-slug)
      - [`markdown-file-path`](#markdown-file-path)
      - [`readme-io-api-key`](#readme-io-api-key)
      - [`make-relative-links-absolute`](#make-relative-links-absolute)
  - [Outputs](#outputs)
      - [`response`](#response)
  - [Example usage](#example-usage)

# Project description

This action let you synchronize a readme.io documentation using a markdown file from your repository.

# Documentation

## Inputs

#### `document-slug`

**Required** Slug of the readme.io document to synchronize.

#### `markdown-file-path`

**Required** The path of the markdown file to use for synchronization (eg. `README.md`).

#### `readme-io-api-key`

**Required** Your API key to request readme.io.

#### `make-relative-links-absolute`

If true, all relative markdown links in the markdown will be made absolute (default: false).

## Outputs

#### `response`

The status code of the response from readme.io.

## Example usage

```yml
uses: apivideo/api.video-readmeio-document-sync-action
with:
  document-slug: 'my-software-documentation'
  markdown-file-path: README.md
  make-relative-links-absolute: true
  readme-io-api-key: ${{ secrets.README_IO_API_KEY }}
```
