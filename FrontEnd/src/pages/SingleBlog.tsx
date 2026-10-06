import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { API_NAME } from '../constant'
import type { Blog } from '../types'
import BlogCard, { formatDate } from '../components/BlogCard'
import { Badge, Container, buttonClass } from '../components/ui'

export default function SingleBlog() {
  const { title = '' } = useParams()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [related, setRelated] = useState<Blog[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get<Blog[]>(`${API_NAME}/api/all_blogs`)
        const found = data.find((b) => b.blog_title.toLowerCase() === title.toLowerCase())
        if (found) { setBlog(found); setRelated(data.filter((b) => b.tag === found.tag && b.blog_title !== found.blog_title).slice(0, 3)) }
        setStatus('ready')
      } catch (err) { console.error('ERROR', err); setStatus('error') }
    }
    void load()
  }, [title])

  if (status === 'loading') return <Container className="py-12"><div aria-hidden="true" className="aspect-video max-w-3xl bg-surface-sunken" /><p className="sr-only" role="status">Loading article</p></Container>
  if (status === 'error') return <Container className="py-12"><p role="alert" className="text-danger">The article could not be loaded. Check your connection and reload the page.</p></Container>
  if (!blog) return <Container className="py-12"><h1>Article not found</h1><p className="mt-2 text-muted">We could not find the article you are looking for.</p><Link to="/blog" className={buttonClass('secondary', 'mt-4')}>Back to the blog</Link></Container>

  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: blog.blog_title, image: blog.blog_img, datePublished: blog.date ? new Date(blog.date).toISOString() : undefined, author: { '@type': 'Organization', name: 'MEDVIA' } }
  return (
    <main id="main">
      <Helmet>
        <title>{blog.blog_title} | MEDVIA</title>
        <meta name="description" content={blog.description?.slice(0, 160) ?? blog.blog_title} />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>
      <Container className="py-8 md:py-12">
        <nav aria-label="Breadcrumb"><ol className="flex flex-wrap gap-x-2 text-sm text-muted">
          <li><Link to="/" className="hover:text-brand">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link to="/blog" className="hover:text-brand">Blog</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-ink">{blog.blog_title}</li>
        </ol></nav>
        <article className="mt-6 max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-muted">{blog.tag && <Badge>{blog.tag}</Badge>}<span>{formatDate(blog.date)}</span></div>
          <h1 className="mt-3">{blog.blog_title}</h1>
          {blog.blog_img && <img src={blog.blog_img} alt={blog.img_alt || blog.blog_title} width={960} height={540} className="chamfer mt-6 aspect-video w-full bg-surface-sunken object-cover" />}
          <div className="prose-medvia mt-6">
            {blog.description && <p>{blog.description}</p>}
            {blog.content && <div dangerouslySetInnerHTML={{ __html: blog.content }} />}
            {blog.second_description && <p>{blog.second_description}</p>}
          </div>
          <aside className="mt-10 border-t border-line pt-6">
            <p className="font-semibold">MEDVIA Team</p>
            <p className="text-muted">Our team of medical experts shares insights on surgical innovations and healthcare advancements.</p>
          </aside>
        </article>
        {related.length > 0 && (
          <section aria-labelledby="related" className="mt-14">
            <h2 id="related">Related articles</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{related.map((b) => <BlogCard blog={b} key={b._id ?? b.blog_title} />)}</div>
          </section>
        )}
        <div className="mt-10"><Link to="/blog" className={buttonClass('secondary')}>Back to the blog</Link></div>
      </Container>
    </main>
  )
}
