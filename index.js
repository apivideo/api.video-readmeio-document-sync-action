const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const path = require("path");
const request = require('request');

const makeLinksAbsolute = (repository, markdownFilePath, content) => {
    const relativeFolder = path.parse(markdownFilePath).dir;
    const linksPrefix = `${repository.html_url}/blob/${repository.default_branch}/${!!relativeFolder ? relativeFolder + '/' : ''}`;

    return content.replace(/\[([^\[]+)\]\(((?!#)(?!https?:\/\/).*)\)/gm, `[$1](${linksPrefix}$2)`);
}

const uploadDocument = (content, slug, apiKey, callback) => {
    const options = {
        method: 'PUT',
        url: `https://dash.readme.com/api/v1/docs/${slug}`,
        headers: {
            Authorization: `Basic ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            //  excerpt: description,
            body: content
        })
    };

    request(options, callback);
}

try {
    const documentSlug = core.getInput('document-slug', { required: true });
    const markdownFilePath = core.getInput('markdown-file-path', { required: true });
    const apiKey = core.getInput('readme-io-api-key', { required: true });
    const makeRelativeLinksAbsolute = core.getInput('make-relative-links-absolute', { trimWhitespace: true }).toLowerCase() === 'true';

    const repository = github.context.payload.repository;

    let content = fs.readFileSync(markdownFilePath.trim(), 'utf8');

    if (makeRelativeLinksAbsolute) {
        content = makeLinksAbsolute(repository, markdownFilePath, content);
        console.log(content);
    }

    uploadDocument(content, documentSlug, apiKey, (error, response) => {
        if (error) {
            core.setFailed(error);
            return;
        };
        core.setOutput("response", response.statusCode);
    });
} catch (error) {
    core.setFailed(error.message);
}
