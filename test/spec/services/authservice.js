'use strict';

describe('Service: authService', function () {

  // instantiate service
  var authService,
    init = function () {
      inject(function (_authService_) {
        authService = _authService_;
      });
    };

  // load the service's module
  beforeEach(module('todoApplicationApp'));

  it('should do something', function () {
    init();

    expect(!!authService).toBe(true);
  });

  it('should be configurable', function () {
    module(function (authServiceProvider) {
      authServiceProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(authService.greet()).toEqual('Lorem ipsum');
  });

});
