<script lang="ts">
  import '../app.css';
  import { fly } from 'svelte/transition';
  let { children } = $props();
  let menuOpen = $state(false);
</script>

<nav>
  <div class="nav-inner">
    <div class="nav-logo">
      <a href="/">
        <img src="/brand-mark.png" alt="Christian Dali logo" class="nav-brand-mark" />
        Christian Dali
      </a>
    </div>
    <div class="nav-links">
      <a href="/#work">Work</a>
      <a href="/#education">Education</a>
      <a href="/blog">Writing</a>
      <a href="/#contact">Contact</a>
    </div>
    <button
      class="nav-toggle"
      onclick={() => menuOpen = !menuOpen}
      aria-label="Toggle navigation"
      aria-expanded={menuOpen}
    >{menuOpen ? '✕' : '☰'}</button>
  </div>

  {#if menuOpen}
    <div class="nav-mobile-menu" transition:fly={{ y: -6, duration: 150 }}>
      <a href="/#work"      onclick={() => menuOpen = false}>Work</a>
      <a href="/#education" onclick={() => menuOpen = false}>Education</a>
      <a href="/blog"       onclick={() => menuOpen = false}>Writing</a>
      <a href="/#contact"   onclick={() => menuOpen = false}>Contact</a>
    </div>
  {/if}
</nav>

{@render children()}

<footer>
  <div class="footer-left">
    <div class="footer-logo">Christian Dali</div>
    <div class="footer-sub">Dali Labs · Bakersfield, CA</div>
  </div>
  <div class="footer-links">
    <a href="https://github.com/christiandali" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/christiandali" target="_blank">LinkedIn</a>
    <a href="mailto:christiandali.dev@gmail.com">Email</a>
  </div>
</footer>

<style>
  nav {
    background: rgba(250, 248, 243, 0.95);
    border-bottom: 0.5px solid #d4c9a8;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(8px);
  }

  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2.5rem;
  }

  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 700;
    color: #1c1a15;
  }

  .nav-logo a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav-brand-mark {
    width: 42px;
    height: 42px;
    object-fit: contain;
    display: block;
    flex-shrink: 0;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    font-size: 13px;
    font-weight: 400;
    color: #6b6147;
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .nav-links a:hover {
    color: #c17f3a;
  }

  .nav-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    font-size: 20px;
    color: #1c1a15;
    line-height: 1;
  }

  .nav-mobile-menu {
    display: flex;
    flex-direction: column;
    padding: 0 1.25rem 0.5rem;
    border-top: 0.5px solid #e8e0cc;
  }

  .nav-mobile-menu a {
    font-size: 13px;
    font-weight: 400;
    color: #6b6147;
    text-decoration: none;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.9rem 0;
    border-bottom: 0.5px solid #ede5d2;
  }

  .nav-mobile-menu a:last-child {
    border-bottom: none;
  }

  .nav-mobile-menu a:hover {
    color: #c17f3a;
  }

  footer {
    background: #1c1a15;
    padding: 2rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    color: #d4c9a8;
  }

  .footer-sub {
    font-size: 11px;
    color: #6b6147;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }

  .footer-links {
    display: flex;
    gap: 1.5rem;
  }

  .footer-links a {
    font-size: 12px;
    color: #9e8c6a;
    text-decoration: none;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .footer-links a:hover {
    color: #d4c9a8;
  }

  @media (max-width: 700px) {
    .nav-inner {
      padding: 1rem 1.25rem;
    }

    .nav-links {
      display: none;
    }

    .nav-toggle {
      display: block;
    }

    footer {
      flex-direction: column;
      gap: 1.5rem;
      text-align: center;
    }
  }
</style>
