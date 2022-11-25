const request= require('supertest');

describe('get campus', () => {
    it('should return first campus', async () => {
    await request('https://nathandhoore.netlify.app')
    .get('/.netlify/functions/api/campus')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect((res) => {
        console.log(res.body[0])
    })
});
});


