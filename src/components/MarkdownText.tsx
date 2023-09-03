import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import {NCode, NImage} from 'naive-ui'
import {Marked} from 'marked'
import {markedHighlight} from "marked-highlight"
import {VNode} from '@vue/runtime-core'
import {NuxtLink} from '#components'
import {VueParser, Lexer} from 'marked2vue'


const marked = new Marked(
    markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code: string, lang: string) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        }
    })
);
//
// const childNode2VNode = (node: ChildNode):VNode|string|null => {
//     if (node.nodeName === '#text') {
//         return node.nodeValue
//     }
//     let hChild = []
//     if (node.childNodes && node.childNodes.length > 0) {
//         for (let i = 0; i < node.childNodes.length; i++) {
//             hChild.push(childNode2VNode(node.childNodes.item(i)))
//         }
//     }
//     let attributes: NamedNodeMap = node.attributes
//     let hMap = {}
//     if (attributes && attributes.length > 0) {
//         for (let i = 0; i < attributes.length; i++) {
//             let attr = attributes.item(i)
//             if (attr?.name) {
//                 hMap[attr.name] = attr?.value
//             }
//         }
//     }
//     if (node.nodeName.toLowerCase() === 'img') {
//         hMap['lazy'] = true
//         return h(NImage, hMap, hChild)
//     }
//     if (node.nodeName.toLowerCase() === 'pre') {
//         // hMap['class'] =  ' hljs'
//         // return h('p', {}, h(node.nodeName, hMap, hChild))
//     }
//     if (node.nodeName.toLowerCase() === 'a') {
//         hMap['to'] = hMap['href'].replace('https://autre.me', '')
//         return h(NuxtLink, hMap, hChild)
//     }
//     if (node.nodeName.toLowerCase() === 'code') {
//         // debugger
//         // hMap['code'] = node.nodeValue
//         if (!hMap['class']) {
//             hMap['class'] = 'hljs'
//         }else if (hMap['class'].indexOf('hljs') === 0){
//             hMap['class'] = hMap['class'] + ' hljs'
//         }
//         // return h(NCode, hMap, hChild)
//         return h(node.nodeName, hMap, hChild)
//     }
//     return h(node.nodeName, hMap, hChild)
// }
// const html2VNode = (htmlStr: HTMLElement):VNode|string|null => {
//     let hChild = []
//     for (let i = 0; i < htmlStr.childNodes.length; i++) {
//         hChild.push(childNode2VNode(htmlStr.childNodes.item(i)))
//     }
//     return h('div', {}, hChild)
// }

export default defineComponent({
    name: 'MarkdownText',
    props: {
        text: {type: String, default: ''}
    },
    render: (props: { text: string }) => {
        const lexer = new Lexer() as any
        const vueParser = new VueParser()
        let vnode = vueParser.parse(lexer.lex(marked.parse(props.text)))
        return h('div', vnode)
    }
})
