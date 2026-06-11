import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';

export const load: PageServerLoad = async ({ params }) => {
  const files = import.meta.glob('/src/lib/posts/*.md', { query: '?raw', import: 'default' });
  const match = files[`/src/lib/posts/${params.slug}.md`];

  if (!match) error(404, 'Post not found');

  const raw = await match();
  const { data, content } = matter(raw);
  const html = await marked(content);

  return {
    title: data.title,
    date: data.date,
    html
  };
};