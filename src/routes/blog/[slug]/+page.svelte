<script lang="ts">
  let { data } = $props();
</script>

<main>
  <a href="/blog" class="back">← Back to Writing</a>

  <article>
    <p class="date">{new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <h1>{data.title}</h1>
    <div class="content">
      {@html data.html}
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