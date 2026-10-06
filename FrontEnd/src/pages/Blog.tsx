import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { API_NAME } from '../constant'
import { SITE_URL } from '../constant/site'
import type { Blog as BlogT } from '../types'
import BlogCard, { formatDate } from '../components/BlogCard'
import { Badge, Container, PageHeader, ProductGridSkeleton, buttonClass } from '../components/ui'

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogT[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  useEffect(() => {
    axios.get<BlogT[]>(`${API_NAME}/api/all_blogs`)
      .then((r) => { setBlogs(r.data); setStatus('ready') })
      .catch((err: unknown) => { console.log('ERROR', err); setStatus('error') })
  }, [])
  const [featured, ...rest] = blogs
  const title = 'Medical Blog | Healthcare News and Surgical Innovations | MEDVIA'
  return (
    <main id="main">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Read the latest from MEDVIA on medical innovations, surgical instruments, healthcare trends and tips for smart procurement." />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageHeader title="MEDVIA Insights" lead="Medical technology, surgical innovations and healthcare best practices." />
      <Container className="py-10 md:py-14">
        {status === 'loading' && <ProductGridSkeleton count={6} />}
        {status === 'error' && <p role="alert" className="text-danger">Articles could not be loaded. Check your connection and reload the page.</p>}
        {status === 'ready' && !featured && <p>No articles have been published yet.</p>}
        {featured && (
          <article className="grid items-center gap-6 md:grid-cols-2">
            {featured.blog_img && <img src={featured.blog_img} alt={featured.img_alt || featured.blog_title} width={640} height={360} className="chamfer aspect-video w-full bg-surface-sunken object-cover" />}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted">{featured.tag && <Badge>{featured.tag}</Badge>}<span>{formatDate(featured.date)}</span></div>
              <h2><Link to={`/blog/${encodeURIComponent(featured.blog_title)}`} className="hover:text-brand">{featured.blog_title}</Link></h2>
              {featured.description && <p className="line-clamp-4 text-muted">{featured.description}</p>}
              <div><Link to={`/blog/${encodeURIComponent(featured.blog_title)}`} className={buttonClass('secondary')}>Read the article</Link></div>
            </div>
          </article>
        )}
        {rest.length > 0 && (
          <section aria-labelledby="latest" className="mt-14">
            <h2 id="latest">Latest articles</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{rest.map((b) => <BlogCard blog={b} key={b._id ?? b.blog_title} />)}</div>
          </section>
        )}
      </Container>
    </main>
  )
}
