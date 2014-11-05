angular.module('app').factory('mvProgramme', function($resource) {
    var ProgrammeResource = $resource('/api/programmes/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
    return ProgrammeResource;
});