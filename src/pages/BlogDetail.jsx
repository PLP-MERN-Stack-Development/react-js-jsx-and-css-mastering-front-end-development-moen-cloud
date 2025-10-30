import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { getPostById } from '../api/blogApi'
import Loader from '../components/Loader'
import formatDate from '../utils/formatDate'


export default function BlogDetail() {
const { id } = useParams()
const { data: post, loading, error } = useFetch(() => getPostById(id), [id])


if (loading) return <Loader />
if (error) return <div className="text-red-500">Error loading post</div>
if (!post) return <div>Post not found</div>


return (
<article className="prose dark:prose-invert max-w-none">
<h1>{post.title}</h1>
<div className="text-sm text-gray-500 dark:text-gray-400 mb-6">{formatDate(post.publishedAt)} — {post.author || 'Author'}</div>
<div dangerouslySetInnerHTML={{ __html: post.body }} />
</article>
)
}