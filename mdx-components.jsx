import { useMDXComponent } from 'next-contentlayer/hooks'
import { slug } from 'github-slugger'

const mdxComponents = {
  h1: ({ children }) => (
    <h1 id={slug(children)} className="scroll-m-20 text-4xl font-bold tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 id={slug(children)} className="scroll-m-20 text-3xl font-semibold tracking-tight">
      {children}
    </h2>
  ),
}

export default mdxComponents