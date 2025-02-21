'use client'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from './mdx-components'

export default function MDXContent({ source }) {
  return <MDXRemote {...source} components={MDXComponents} />
}