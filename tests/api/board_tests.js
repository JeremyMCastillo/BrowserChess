const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../../index');

chai.use(chaiHttp);
const should = chai.should();

describe('Board endpoint', () => {
  describe('POST Methods', () => {
    it('should register a new game with player1', (done) => {
      chai
        .request(app)
        .post('/board/new-game')
        .type('json')
        .send({ username: 'testName' })
        .end((err, res) => {
          res.should.have.status(200);
          should.not.exist(err);
          done();
        });
    });
  });
});
