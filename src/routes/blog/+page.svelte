<script lang="ts">
  let { data } = $props();
</script>

<main>
  <section class="blog-hero">
    <p class="label">Writing</p>
    <h1>Thoughts & Dev Journal</h1>
    <p class="tagline">Notes on building, learning, and working in the Central Valley Tech World!</p>
  </section>

  <section class="posts">
    {#each data.posts as post}
      <a href="/blog/{post.slug}" class="post-card">
        <p class="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <h2>{post.title}</h2>
        <p class="post-description">{post.description}</p>
        <span class="read-more">Read more →</span>
      </a>
    {/each}
  </section>
</main>

<style>
  main {
    font-family: 'Inter', sans-serif;
    max-width: 760px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
  }

  .blog-hero {
    padding: 4rem 0 3rem;
    border-bottom: 0.5px solid #d4c9a8;
    margin-bottom: 3rem;
  }

  .label {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #c17f3a;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 700;
    color: #1c1a15;
    margin-bottom: 1rem;
  }

  .tagline {
    font-size: 15px;
    color: #5a5340;
    line-height: 1.7;
    font-weight: 300;
  }

  .posts {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .post-card {
    display: block;
    padding: 2rem 0;
    border-bottom: 0.5px solid #d4c9a8;
    text-decoration: none;
  }

  .post-card:hover .post-title {
    color: #c17f3a;
  }

  .post-date {
    font-size: 11px;
    color: #b0a07a;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .post-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    color: #1c1a15;
    margin-bottom: 0.5rem;
    transition: color 0.2s;
  }

  .post-description {
    font-size: 14px;
    color: #6b6147;
    line-height: 1.7;
    font-weight: 300;
    margin-bottom: 0.75rem;
  }

  .read-more {
    font-size: 12px;
    color: #2d5a3d;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
</style>