'use strict';

describe('A colorPickerData', function () {

  var colorpickerData;
  beforeEach(module('colorpickerApp'));

  beforeEach(inject(function (_colorpickerData_) {
    colorpickerData = _colorpickerData_;
  }));

  describe('Public API', function () {
    it('should provide a merge function', function () {
      expect(colorpickerData.getColors).toBeDefined();
      expect(typeof colorpickerData.getColors).toEqual('function');
    });
  });


});