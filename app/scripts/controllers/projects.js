'use strict';

/**
 * @ngdoc function
 * @name electroCrudApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the electroCrudApp
 */
angular.module('electroCrudApp')
  .controller('ProjectsCtrl', ['$scope', 'breadcrumb', 'projectsModel', '$location', 'session',
  function ($scope, breadcrumb, projectsModel, $location, session) {
    breadcrumb.set("Projects", "/#/projects");
    $scope.projects = [];

    function reload() {
      projectsModel.getList().then(function(results) {
        angular.copy(results.rows, $scope.projects);
      });
    }

    reload();

    $scope.editProject = function(id) {
      $location.path("/projects/edit/"+id);
    };

    $scope.openProject = function(projectId) {
      session.openProject(projectId);
    };

  }]);
