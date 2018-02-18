'use strict';

const assert = require('assert');
const {
    isObservation,
    isAirStation,
    isWeather,
    isFunny
} = require('../../lib/keywords');

describe('=== Check keywords ===', () => {

    it('Test isWeather', done => {
        assert.equal(isWeather("台北天氣"), "天氣");
        assert.equal(isWeather("台北氣溫"), "氣溫");
        done();
    });

    it('Test isAirStation', done => {
        assert.equal(isAirStation("古亭"), "古亭");
        assert.equal(isAirStation("士林"), "士林");
        assert.equal(isAirStation("公館"), null);
        done();
    });

    it('Test isObservation', done => {
        assert.equal(isObservation("鞍部"), "鞍部");
        assert.equal(isObservation("基隆"), "基隆");
        assert.equal(isObservation("美國"), null);
        done();
    });

    it('Test isFunny', done => {
        assert.notEqual(isFunny("新年"));
        assert.equal(isObservation("美國"), null);
        done();
    });
});