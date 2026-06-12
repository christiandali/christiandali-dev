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
    font-family: 'Inter', sans-serif;
    max-width: 680px;
    margin: 0 auto;
    padding: 2rem 2.5rem 5rem;
  }

  .back {
    display: inline-block;
    margin: 2rem 0;
    font-size: 11px;
    color: #2d5a3d;
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .back:hover {
    text-decoration: underline;
  }

  .date {
    font-size: 11px;
    color: #b0a07a;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 700;
    color: #1c1a15;
    line-height: 1.2;
    margin-bottom: 2.5rem;
  }

  .content :global(h2) {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    color: #1c1a15;
    margin: 2.5rem 0 0.75rem;
  }

  .content :global(p) {
    font-size: 16px;
    line-height: 1.8;
    color: #3d3828;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }

  .content :global(a) {
    color: #2d5a3d;
    text-decoration: underline;
  }

  .content :global(code) {
    background: #f0ead8;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 0.9rem;
    font-family: monospace;
    color: #1c1a15;
  }
</style>