'use strict';

describe('Controller: MytodosCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApplicationApp'));

  var MytodosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MytodosCtrl = $controller('MytodosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MytodosCtrl.awesomeThings.length).toBe(3);
  });
});
