'use strict';

describe('chevalierApp.version module', function() {
  beforeEach(module('chevalierApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
