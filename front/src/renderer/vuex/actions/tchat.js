import moment from 'moment';
import showdown from 'showdown';
import hljs from 'highlight.js';
/* eslint-disable no-unused-vars */
const twitter = require('showdown-twitter');
import * as types from '../mutation-types';
export const addMessage = (state, messages) => {
    messages.forEach((message) => {
        const converter = new showdown.Converter({
            extensions: ['twitter'],
            strikethrough: true,
            tasklists: true,
            literalMidWordUnderscores: true,
            literalMidWordAsterisks: true,
            simpleLineBreaks: true,
            simplifiedAutoLink: true,
            ghMentions: true,
            parseImgDimensions: true,
            excludeTrailingPunctuationFromURLs: true,
            openLinksInNewWindow: true,
            ghMentionsLink: 'https://twitter.com/{u}',
            ghCodeBlocks: true,
            emoji: true,
            backslashEscapesHTMLTags: true
        });
        let messageContent = converter.makeHtml(message.content);
        const parser = new DOMParser();
        const doc = parser.parseFromString(messageContent, 'text/html');
        const preCode = doc.querySelectorAll('pre code');
        preCode.forEach((item) => {
            hljs.highlightBlock(item);
        });
        messageContent = doc.querySelector('body').innerHTML;
        const regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})/gi;
        const date = message.postedAt.match(regex);
        state.commit(types.ADD_MESSAGE, {
            content: messageContent,
            user: message.user,
            postedAt: moment(date[0]).fromNow()
        });
    });
};
//# sourceMappingURL=tchat.js.map