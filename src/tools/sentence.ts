// Fully copy from Saladict;

import { SelectionSentence } from "models/search"

const INLINE_TAGS = new Set([
  // Inline text semantics
  'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn', 'em', 'i',
  'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'small',
  'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr'
])

/**
* @returns {boolean}
*/
export function hasSelection (selection: Selection) {
  return Boolean(selection.toString().trim())
}

/**
* @returns {string}
*/
export function getSelectionText (selection: Selection) {
  return selection.toString()
    .replace(/(^\s+)|(\s+$)/gm, '\n') // allow one empty line & trim each line
    .replace(/(^\s+)|(\s+$)/g, '') // remove heading or tailing \n
}

// match head                 a.b is ok    chars that ends a sentence
const sentenceHeadTester = /((\.(?![ .]))|[^.?!。？！…\r\n])+$/
// match tail                                                    for "..."
const sentenceTailTester = /^((\.(?![ .]))|[^.?!。？！…\r\n])+(.)\3{0,2}/

/**
* @returns {string}
*/
export function getSelectionSentence (selection: Selection) : SelectionSentence {
  const selectedText = selection.toString()
  if (!selectedText.trim()) { return {} }

  var sentenceHead = ''
  var sentenceTail = ''

  const anchorNode = selection.anchorNode
  if (anchorNode?.nodeType === Node.TEXT_NODE) {
    let leadingText = anchorNode.textContent?.slice(0, selection.anchorOffset) ?? '';
    for (let node = anchorNode.previousSibling; node; node = node.previousSibling) {
      if (node.nodeType === Node.TEXT_NODE) {
        leadingText = node.textContent + leadingText;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        leadingText = (node as HTMLElement).innerText + leadingText
      }
    }

    for (
      let element = anchorNode.parentElement;
      element && INLINE_TAGS.has(element.tagName.toLowerCase()) && element !== document.body;
      element = element.parentElement
    ) {
      for (let el = element.previousElementSibling; el; el = el.previousElementSibling) {
        leadingText = (el as HTMLElement).innerText + leadingText;
      }
    }

    sentenceHead = (leadingText.match(sentenceHeadTester) || [''])[0];
  }

  const focusNode = selection.focusNode
  if (focusNode?.nodeType === Node.TEXT_NODE) {
    let tailingText = focusNode.textContent?.slice(selection.focusOffset) ?? '';
    for (let node = focusNode.nextSibling; node; node = node.nextSibling) {
      if (node.nodeType === Node.TEXT_NODE) {
        tailingText += node.textContent;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        tailingText += (node as HTMLElement).innerText
      }
    }

    for (
      let element = focusNode.parentElement;
      element && INLINE_TAGS.has(element.tagName.toLowerCase()) && element !== document.body;
      element = element.parentElement
    ) {
      for (let el = element.nextElementSibling; el; el = el.nextElementSibling) {
        tailingText += (el as HTMLElement).innerText
      }
    }

    sentenceTail = (tailingText.match(sentenceTailTester) || [''])[0]
  }

  return {
    normal: (sentenceHead + selectedText + sentenceTail)
      .replace(/(^\s+)|(\s+$)/gm, '\n') // allow one empty line & trim each line
      .replace(/(^\s+)|(\s+$)/g, ''), // remove heading or tailing \n
    bold: (sentenceHead + '<b>' + selectedText + '</b>' + sentenceTail)
      .replace(/(^\s+)|(\s+$)/gm, '\n')
      .replace(/(^\s+)|(\s+$)/g, '')
  }
}
