export default function formatDate(iso) {
if (!iso) return ''
const d = new Date(iso)
return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}