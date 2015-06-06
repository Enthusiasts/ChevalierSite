'use strict';

angular.module('chevalierApp.version', [
  'chevalierApp.version.interpolate-filter',
  'chevalierApp.version.version-directive'
])

.value('version', '0.1');
