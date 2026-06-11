<script lang="ts">
  import '../app.css';
  
  let { children } = $props();
</script>

<nav>
  <a href="/" class="logo">Christian Dali</a>
  <div class="nav-links">
    <a href="/#work">Work</a>
    <a href="/#education">Education</a>
    <a href="/blog">Writing</a>
    <a href="/#contact">Contact</a>
  </div>
</nav>

{@render children()}

<style>
  nav {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid #eee;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }

  .logo {
    font-family: 'Georgia', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a1a1a;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    font-size: 0.9rem;
    color: #555;
    text-decoration: none;
    font-family: 'Arial', sans-serif;
  }

  .nav-links a:hover {
    color: #2d6a4f;
  }

  @media (max-width: 600px) {
    nav {
      padding: 1rem;
    }

    .nav-links {
      gap: 1rem;
    }

    .nav-links a {
      font-size: 0.8rem;
    }
  }
</style>