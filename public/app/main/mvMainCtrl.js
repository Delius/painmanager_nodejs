
angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.programmes = [
        {name: 'Streatching with Sofists', featured: true, published: new Date('1/12/2014')},
        {name: 'Final Yoga', featured: true, published: new Date('1/1/2013')},
        {name: 'Acupuncture with puncturists', featured: false, published: new Date('1/1/2013')},
        {name: 'Solar Meditation', featured: false, published: new Date('5/11/2013')},
        {name: 'Starving', featured: true, published: new Date('1/1/2013')},
        {name: 'Taking endless rest', featured:true, published: new Date('1/1/2013')},
        {name: 'Pain Surviwal', featured: true, published: new Date('2/1/2013')},
        {name: 'How to rest without pain', featured: true, published: new Date('10/7/2013')},
        {name: 'How to Keep fit', featured: false, published: new Date('8/1/2013')},
        {name: 'Telling others to help you', featured: false, published: new Date('11/1/2013')},
        {name: "Writing pain records", featured: true, published: new Date('10/13/2013')},
        {name: 'Attending Suport groups', featured: false, published: new Date('10/1/2013')},
        {name: 'How to Deal with Family', featured: true, published: new Date('2/15/2013')},
        {name: 'Cooking for pain less', featured: true, published: new Date('7/1/2013')}

    ]
});