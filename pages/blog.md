---
layout: layouts/blog.njk
title: Blog
metaDescription: Articles and reflections on technology, its development, and its influence on modern digital life.
date: 2025-12-25
pagination:
  data: collections.blog
  size: 5
  alias: posts
permalink: "/blog/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
eleventyNavigation:
  key: Blog
  order: 2
---