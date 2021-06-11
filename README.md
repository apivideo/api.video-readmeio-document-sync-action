# readmeio-document-sync-action
This action let you update a readme.io documentation (for instance using your repository readme).


## Inputs

### `document-slug`

**Required** Slug of the readme.io document to synchronize.

### `content`

**Required** The content of the document.

### `readme-io-api-key

**Required** Your API key to request readme.io.

### `relative-links-host`

If provided, all relative markdown links in the document will be prefixed with this value.

## Outputs

### `response`

The status code of the response from readme.io.

## Example usage

uses: apivideo/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'