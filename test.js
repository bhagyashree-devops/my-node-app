const request = require('supertest');
const assert = require('assert');
const app = require('./server');

describe('Node App Tests', () => {
  it('should return 200 on main route', async () => {
    const res = await request(app).get('/');
    assert.strictEqual(res.statusCode, 200);
    assert.ok(res.text.includes('Hello from EC2'));
  });

  it('should return 200 on health route', async () => {
    const res = await request(app).get('/health');
    assert.strictEqual(res.statusCode, 200);
  });
});
