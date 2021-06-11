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