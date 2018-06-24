import moment from 'moment'
import showdown from 'showdown'
import hljs from 'highlight.js'
/* eslint-disable no-unused-vars */
import twitter from 'showdown-twitter'

import * as types from '../mutation-types'

moment.locale('fr')

export const addMessage = (state, message) => {
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
  })

  let messageContent = converter.makeHtml(message.content)

  const parser = new DOMParser()
  const doc = parser.parseFromString(messageContent, 'text/html')
  const preCode = doc.querySelectorAll('pre code')

  preCode.forEach(item => {
    hljs.highlightBlock(item)
  })

  messageContent = doc.querySelector('body').innerHTML

  state.commit(types.ADD_MESSAGE, {
    content: messageContent,
    author: state.state.auth.user.pseudo,
    postedAt: moment().calendar()
  })
}
