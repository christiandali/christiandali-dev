<script lang="ts">
  import { onMount } from 'svelte';

  const posts = [
    {
      slug: 'building-my-portfolio',
      title: 'I Built and Launched My Portfolio Site in a Day',
      date: 'June 11, 2026',
      description: 'How I went from zero to a live SvelteKit site at christiandali.dev in one session.'
    }
  ];
</script>

<main>
  <section class="blog-hero">
    <p class="label">Writing</p>
    <h1>Thoughts & Dev Journal</h1>
    <p class="tagline">Notes on building, learning, and working in the Central Valley tech scene.</p>
  </section>

  <section class="posts">
    {#each posts as post}
      <a href="/blog/{post.slug}" class="post-card">
        <p class="post-date">{post.date}</p>
        <h2>{post.title}</h2>
        <p class="post-description">{post.description}</p>
        <span class="read-more">Read more →</span>
      </a>
    {/each}
  </section>
</main>

<style>
  main {
    font-family: 'Georgia', serif;
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem;
  }

  .blog-hero {
    padding: 4rem 0 3rem;
    border-bottom: 1px solid #eee;
    margin-bottom: 3rem;
  }

  .label {
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #888;
    font-family: 'Arial', sans-serif;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  .tagline {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    font-family: 'Arial', sans-serif;
  }

  .posts {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .post-card {
    display: block;
    padding: 1.75rem;
    border: 1px solid #eee;
    border-radius: 8px;
    text-decoration: none;
    transition: border-color 0.2s;
  }

  .post-card:hover {
    border-color: #2d6a4f;
  }

  .post-date {
    font-size: 0.8rem;
    color: #aaa;
    font-family: 'Arial', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.3rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  .post-description {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
    font-family: 'Arial', sans-serif;
    margin-bottom: 1rem;
  }

  .read-more {
    font-size: 0.85rem;
    color: #2d6a4f;
    font-family: 'Arial', sans-serif;
  }
</style>