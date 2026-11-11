const { test, expect } = require('@playwright/test');

const BASE = 'https://jsonplaceholder.typicode.com';

test('GET /posts - список постов', async ({ request }) => {
  const response = await request.get(`${BASE}/posts`);

  expect(response.status()).toBe(200);
  const posts = await response.json();
  expect(posts.length).toBe(100);
});

test('GET /posts/1 - один пост', async ({ request }) => {
  const response = await request.get(`${BASE}/posts/1`);

  expect(response.status()).toBe(200);
  const post = await response.json();
  expect(post.id).toBe(1);
});

test('GET /posts/9999 - пост не найден', async ({ request }) => {
  const response = await request.get(`${BASE}/posts/9999`);

  expect(response.status()).toBe(404);
});

test('POST /posts - создание поста', async ({ request }) => {
  const newPost = { title: 'foo', body: 'bar', userId: 1 };
  const response = await request.post(`${BASE}/posts`, { data: newPost });

  expect(response.status()).toBe(201);
  const created = await response.json();
  expect(created.title).toBe('foo');
  expect(created.id).toBe(101); 
});

test('PUT /posts/1 - обновление поста', async ({ request }) => {
  const updated = { id: 1, title: 'new title', body: 'new body', userId: 1 };
  const response = await request.put(`${BASE}/posts/1`, { data: updated });

  expect(response.status()).toBe(200);
  const result = await response.json();
  expect(result.title).toBe('new title');
});

test('PATCH /posts/1 - частичное обновление', async ({ request }) => {
  const response = await request.patch(`${BASE}/posts/1`, {
    data: { title: 'patched' },
  });

  expect(response.status()).toBe(200);
  const result = await response.json();
  expect(result.title).toBe('patched');
});

test('DELETE /posts/1 - удаление поста', async ({ request }) => {
  const response = await request.delete(`${BASE}/posts/1`);

  expect(response.status()).toBe(200);
});