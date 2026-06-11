<script lang="ts">
  import { marked } from 'marked';
  import { error } from '@sveltejs/kit';

  const posts: Record<string, { title: string; date: string; content: string }> = {
    'building-my-portfolio': {
      title: 'I Built and Launched My Portfolio Site in a Day',
      date: 'June 11, 2026',
      content: `
Today I built and deployed my personal portfolio site using SvelteKit — a framework I'd only tried briefly before today.

## What I built

The site includes a hero section, a work portfolio, an education section, and a contact section. It's live at [christiandali.dev](https://christiandali.dev) and deployed via Cloudflare Pages.

## What I learned

SvelteKit's file-based routing is one of the cleanest things I've worked with. The idea that your folder structure *is* your navigation — no router config, no extra setup — just makes sense.

The \`+layout.svelte\` file was a new concept for me. It wraps every page in your app, which is perfect for a nav bar that needs to appear everywhere.

## Why I built it

I'm building my name in the Central Valley tech and ag-tech scene. Having a real home on the internet — something I own and control — felt like a necessary first step.

More writing coming soon.
      `
    }
  };

  let { data } = $props();
  const slug = data.slug;
  const post = posts[slug];

  if (!post) {
    error(404, 'Post not found');
  }

  const html = marked(post.content);
</script>

<main>
  <a href="/blog" class="back">← Back to Writing</a>

  <article>
    <p class="date">{post.date}</p>
    <h1>{post.title}</h1>
    <div class="content">
      {@html html}
    </div>
  </article>
</main>

<style>
  main {
    font-family: 'Georgia', serif;
    max-width: 680px;
    margin: 0 auto;
    padding: 2rem;
  }

  .back {
    display: inline-block;
    margin: 2rem 0;
    font-size: 0.9rem;
    color: #2d6a4f;
    font-family: 'Arial', sans-serif;
    text-decoration: none;
  }

  .back:hover {
    text-decoration: underline;
  }

  article {
    padding-bottom: 4rem;
  }

  .date {
    font-size: 0.8rem;
    color: #aaa;
    font-family: 'Arial', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.2;
    margin-bottom: 2.5rem;
  }

  .content :global(h2) {
    font-size: 1.3rem;
    color: #1a1a1a;
    margin: 2rem 0 0.75rem;
  }

  .content :global(p) {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1.25rem;
    font-family: 'Georgia', serif;
  }

  .content :global(a) {
    color: #2d6a4f;
    text-decoration: underline;
  }

  .content :global(code) {
    background: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 0.9rem;
    font-family: monospace;
  }
</style>