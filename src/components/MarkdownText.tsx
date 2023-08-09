import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import {NCode, NImage} from 'naive-ui'
import {marked} from 'marked'

const childNode2VNode = (node: ChildNode) => {
    if (node.nodeName === '#text') {
        return node.nodeValue
    }
    let hChild = []
    if (node.nodeValue) {
        hChild.push(node.nodeValue)
    }
    if (node.childNodes && node.childNodes.length > 0) {
        for (let i = 0; i < node.childNodes.length; i++) {
            hChild.push(childNode2VNode(node.childNodes.item(i)))
        }
    }
    let attributes: NamedNodeMap = node.attributes
    let hMap = {}
    if (attributes && attributes.length > 0) {
        for (let i = 0; i < attributes.length; i++) {
            let attr = attributes.item(i)
            if (attr?.name) {
                hMap[attr.name] = attr?.value
            }
        }
    }
    if (node.nodeName.toLowerCase() === 'img') {
        hMap['lazy'] = true
        return h(NImage, hMap, hChild)
    }
    if (node.nodeName.toLowerCase() === 'pre') {
        return h(NCode, hMap, hChild)
    }
    return h(node.nodeName, hMap, hChild)
}
const html2VNode = (htmlStr: HTMLElement) => {
    let hChild = []
    for (let i = 0; i < htmlStr.childNodes.length; i++) {
        hChild.push(childNode2VNode(htmlStr.childNodes.item(i)))
    }
    return h('div', {}, hChild)
}

export default defineComponent({
    name: 'MarkdownText',
    props: {
        text: {type: String, default: ''}
    },
    render: (props: { text: string }) => {
        let htmlDivElement = document.createElement('div')
        htmlDivElement.innerHTML = marked.parse(props.text)
        // debugger
        return html2VNode(htmlDivElement)
    }
})
