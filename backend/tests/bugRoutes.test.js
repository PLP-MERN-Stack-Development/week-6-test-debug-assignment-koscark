const request = require('supertest');
const express = require('express');
const bugRoutes = require('../routes/bugRoutes');
const errorHandler = require('../middleware/errorHandler');
const Bug = require('../models/Bug');

jest.mock('../models/Bug');

const app = express();
app.use(express.json());
app.use('/api/bugs', bugRoutes);
app.use(errorHandler);

describe('Bug API', () => {
  afterEach(() => jest.clearAllMocks());

  test('GET /api/bugs returns bugs', async () => {
    Bug.find.mockResolvedValue([{ _id: '1', title: 'Bug', description: 'Desc', status: 'open' }]);
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(res.body[0].title).toBe('Bug');
  });

  test('POST /api/bugs validates input', async () => {
    const res = await request(app).post('/api/bugs').send({ title: '', description: '' });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(/Title is required/);
  });

  test('POST /api/bugs creates bug', async () => {
    // Mock Bug constructor and save to return a plain object
    const bugData = { _id: '2', title: 'Bug', description: 'A valid description', status: 'open' };
    Bug.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue(bugData),
      ...bugData
    }));
    const res = await request(app).post('/api/bugs').send({ title: 'Bug', description: 'A valid description' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Bug');
  });

  test('PUT /api/bugs/:id updates bug', async () => {
    Bug.findByIdAndUpdate.mockResolvedValue({ _id: '1', title: 'Bug', description: 'Desc', status: 'resolved' });
    const res = await request(app).put('/api/bugs/1').send({ status: 'resolved' });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('resolved');
  });

  test('DELETE /api/bugs/:id deletes bug', async () => {
    Bug.findByIdAndDelete.mockResolvedValue({ _id: '1' });
    const res = await request(app).delete('/api/bugs/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Bug deleted');
  });
});
