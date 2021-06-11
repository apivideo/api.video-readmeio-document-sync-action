const core = require('@actions/core');
const github = require('@actions/github');

try {
    const documentSlug = core.getInput('document-slug');
    const content = core.getInput('content');
    const apiKey = core.getInput('readme-io-api-key');
    const relativeLinksHost = core.getInput('relative-links-host');

    console.log(github.context);
    console.log({ documentSlug, content, apiKey, relativeLinksHost });

    core.setOutput("response", "200");
} catch (error) {
    core.setFailed(error.message);
}