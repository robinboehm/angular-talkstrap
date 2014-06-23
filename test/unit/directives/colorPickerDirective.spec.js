'use strict';


describe('A colorpicker', function () {
  var $rootScope, $compile, $httpBackend;

  beforeEach(module('colorpickerApp'));

  beforeEach(inject(function (_$q_, _$rootScope_, _$compile_, _$httpBackend_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;
  }));

  beforeEach(function () {
    var response = [
      {r: 100, g: 200, b: 50, a: 1}
    ];
    $httpBackend.whenGET(/[*]colors/).respond(response);
    $httpBackend.whenPOST(/[*]colors/).respond(response);
  });













  it('should render a colorpicker', function () {
    var element = $compile('<colorpicker></colorpicker>')($rootScope);
    $rootScope.$apply();

    expect(element.find('input').length).toBe(4);
    expect(element.find('div').length).toBe(1);
  });


});