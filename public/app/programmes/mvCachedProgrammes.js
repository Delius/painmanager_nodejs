angular.module('app').factory('mvCachedProgrammes', function(mvProgramme) {
    var programmeList;
    return {
        query: function() {
            if(!programmeList) {
                programmeList = mvProgramme.query();
            }

            return programmeList;
        }
    };
});