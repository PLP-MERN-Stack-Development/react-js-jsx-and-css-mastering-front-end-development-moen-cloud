export default function truncateText(text, length = 150) {
if (!text) return ''
return text.length > length ? text.slice(0, length) + '…' : text
}