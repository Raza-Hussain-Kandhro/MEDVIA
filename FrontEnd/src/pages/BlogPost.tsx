import { useState } from 'react'
import type { FormEvent } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { API_NAME } from '../constant'
import { Container, Input, PageHeader, Textarea, buttonClass } from '../components/ui'

export default function CreateBlog() {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')
  const [secondDescription, setSecondDescription] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setState('sending')
    const payload = {
      blog_title: title || '',
      tag: tag || '',
      blog_img: imageURL || '',
      description: description || '',
      second_description: secondDescription || '',
    }
    try {
      await axios.post(`${API_NAME}/api/add_blog`, payload, {
        headers: { 'Content-Type': 'application/json' },
      })
      setState('sent')
      setTitle('')
      setTag('')
      setImageURL('')
      setDescription('')
      setSecondDescription('')
    } catch (err) {
      console.error('Blog post error:', err)
      setState('failed')
    }
  }
  return (
    <main id="main">
      <Helmet>
        <title>Write a new blog | MEDVIA</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <PageHeader title="Write a new blog" />
      <Container className="py-10">
        <form onSubmit={(e) => void submit(e)} className="max-w-2xl space-y-4">
          <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input label="Tag" value={tag} onChange={(e) => setTag(e.target.value)} />
          <Input
            label="Image URL"
            type="url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Textarea
            label="Second description"
            value={secondDescription}
            onChange={(e) => setSecondDescription(e.target.value)}
          />
          <button type="submit" disabled={state === 'sending'} className={buttonClass('primary')}>
            {state === 'sending' ? 'Posting' : 'Post blog'}
          </button>
          <p role="status" className={state === 'failed' ? 'text-danger' : 'text-success'}>
            {state === 'sent' && 'Blog posted.'}
            {state === 'failed' && 'The blog could not be posted.'}
          </p>
        </form>
      </Container>
    </main>
  )
}
