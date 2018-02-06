const contentful = require('contentful');
const Redis = require('redis-utils-json');
const express = require('express');

const contentfulApi = express.Router();
const redis = new Redis(process.env.REDIS_URL);

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS,
});

const getPage = async (page) => {
  const { items } = await client.getEntries({ content_type: 'page', include: 10 });
  const [foundPage] = items.filter(item => item.fields.pageTitle.toLowerCase() === page);
  return foundPage;
};

const getPages = async () => {
  const { items } = await client.getEntries({ content_type: 'page', include: 10 });
  const pageTitles = items.map(item => item.fields.pageTitle).sort();
  return pageTitles;
};

contentfulApi.get('/pages', async (req, res) => {
  const pages = await redis.lazyCache('contentful:pages', getPages);
  res.json(pages);
});

contentfulApi.get('/:page', async (req, res) => {
  const { page } = req.params;
  const data = await redis.lazyCache(`contentful:${page}`, () => getPage(page));
  res.json(data);
});


module.exports = contentfulApi;
