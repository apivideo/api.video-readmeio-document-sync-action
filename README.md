[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video)

[![badge](https://img.shields.io/github/stars/apivideo/duetavideo?style=social)](https://github.com/apivideo/readmeio-document-sync-action)

[![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)

![](https://github.com/apivideo/API_OAS_file/blob/master/apivideo_banner.png)

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

# apivideo/readmeio-document-sync-action
This action let you synchronize a readme.io documentation using a markdown file from your repository.


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
uses: apivideo/readmeio-document-sync-action
with:
  document-slug: 'my-software-documentation'
  markdown-file-path: README.md
  make-relative-links-absolute: true
  readme-io-api-key: ${{ secrets.README_IO_API_KEY }}
```
