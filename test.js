const axios = require('axios');

describe('/', () => {
    it('should return "Hello, world!"', async () => {
      const res = await axios.get("http://localhost:3000/");
      expect(res.data).toBe('Hello, world!');
  });
});