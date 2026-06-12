<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<nav>
  <div class="nav-logo">Christian Dali</div>
  <div class="nav-links">
    <a href="/#work">Work</a>
    <a href="/#education">Education</a>
    <a href="/blog">Writing</a>
    <a href="/#contact">Contact</a>
  </div>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2.5rem;
    background: rgba(250, 248, 243, 0.92);
    border-bottom: 0.5px solid #d4c9a8;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(8px);
  }

  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 700;
    color: #1c1a15;
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

  @media (max-width: 600px) {
    nav {
      padding: 1rem 1.25rem;
    }

    .nav-links {
      gap: 1rem;
    }

    footer {
      flex-direction: column;
      gap: 1.5rem;
      text-align: center;
    }
  }
</style>