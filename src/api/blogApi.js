import axios from 'axios'


const base = import.meta.env.VITE_API_URL || 'http://localhost:5000'
const api = axios.create({ baseURL: base })


export async function getPosts() {
const res = await api.get('/api/posts')
return res.data
}


export async function getPostById(id) {
const res = await api.get(`/api/posts/${id}`)
return res.data
}


export async function sendContactForm(payload) {
const res = await api.post('/api/contact', payload)
return res.data
}