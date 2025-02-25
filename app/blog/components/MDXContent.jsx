'use client'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from './MDXComponents'

export default function MDXContent({ source }) {
  return <MDXRemote {...source} components={MDXComponents} />
}