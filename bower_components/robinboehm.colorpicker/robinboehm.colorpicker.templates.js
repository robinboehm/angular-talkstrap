(function(module) {
try {
  module = angular.module('robinboehm.colorpicker');
} catch (e) {
  module = angular.module('robinboehm.colorpicker', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('views/colorPicker.html',
    '<input type="range" min="0" max="255" step="1" ng-model="r"><input type="range" min="0" max="255" step="1" ng-model="g"><input type="range" min="0" max="255" step="1" ng-model="b"><input type="range" min="0" max="1.0" step="0.01" ng-model="a"><div class="preview" style="background-color: rgba({{r}},{{g}},{{b}},{{a}});"></div><button ng-click="save(r,g,b,a)">Save Color!</button><p><h3>Saved Colors</h3><div ng-repeat="color in colors" class="color" style="background-color: rgba({{color.r}},{{color.g}},{{color.b}},{{color.a}});" ng-click="setColor(color)"></div><div style="clear: both"></div></p>');
}]);
})();
