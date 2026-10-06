import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Blog } from '../types'
import { Badge } from './ui'

export const formatDate = (d?: string): string => {
  if (!d) return ''
  const t = new Date(d)
  return Number.isNaN(t.getTime())
    ? ''
    : t.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
export default function BlogCard({ blog }: { blog: Blog }) {
  const [broken, setBroken] = useState(false)
  const to = `/blog/${encodeURIComponent(blog.blog_title)}`
  return (
    <article className="flex flex-col rounded-lg border border-line bg-surface p-3 transition-colors duration-150 ease-out hover:border-brand focus-within:border-brand">
      <Link to={to} className="block">
        {blog.blog_img && !broken ? (
          <img
            src={blog.blog_img}
            alt={blog.img_alt || blog.blog_title}
            width={640}
            height={360}
            loading="lazy"
            decoding="async"
            onError={() => setBroken(true)}
            className="chamfer aspect-video w-full bg-surface-sunken object-cover"
          />
        ) : (
          <div aria-hidden="true" className="chamfer aspect-video w-full bg-surface-sunken" />
        )}
      </Link>
      <div className="mt-3 flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-3 text-sm text-muted">
          {blog.tag && <Badge>{blog.tag}</Badge>}
          <span>{formatDate(blog.date)}</span>
        </div>
        <h3>
          <Link to={to} className="hover:text-brand">
            {blog.blog_title}
          </Link>
        </h3>
        {blog.description && <p className="line-clamp-3 text-muted">{blog.description}</p>}
      </div>
    </article>
  )
}
