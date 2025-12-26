---
layout: layouts/blog.njk
title: Blog
metaDescription: Articles and reflections on technology, its development, and its influence on modern digital life.
date: 2025-12-25
permalink: "/blog/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber | plus: 2 }}/{% endif %}index.html"
pagination:
  data: collections.blog
  size: 20
  alias: posts
eleventyNavigation:
  key: Blog
  order: 2
---