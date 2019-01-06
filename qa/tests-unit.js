var message = require('../lib/message.js');
var expect = require('chai').expect;

suite('Message tests', function() {
    test('getRandomMessage() should return a message', function() {
        expect(typeof message.getRandomMessage() === 'string');
    });
});