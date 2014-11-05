var mongoose = require('mongoose');

var programmeSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    featured: {type:Boolean, required:'{PATH} is required!'},
    published: {type:Date, required:'{PATH} is required!'},
    tags: [String]
});
var Programme = mongoose.model('Programme', programmeSchema);

function createDefaultProgrammes() {

    Programme.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Programme.create({title: 'Tai-Chi', featured: false, published: new Date('4/5/2014'), tags: ['C#']});
            Programme.create({title: 'Accupuncture', featured: false, published: new Date('2/3/2014'), tags: ['D']});
            Programme.create({title: 'Biofeedback', featured: true, published: new Date('5/3/2014'), tags: ['C']});
            Programme.create({title: 'Streaching', featured: false, published: new Date('1/1/2014'), tags: ['B']});
            Programme.create({title: 'Pacing', featured: true, published: new Date('2/4/2014'), tags: ['F#']});
            Programme.create({title: 'Streatching with Sofists', featured: true, published: new Date('1/12/2014')});
            Programme.create({title: 'Final Yoga', featured: true, published: new Date('1/1/2013'), tags: ['C#']});
            Programme.create({title: 'Acupuncture with puncturists', featured: false, published: new Date('1/1/2013'), tags: ['C#']});
            Programme.create({title: 'Solar Meditation', featured: false, published: new Date('5/11/2013'), tags: ['C#']});
            Programme.create({title: 'Starving', featured: true, published: new Date('1/1/2013'), tags: ['C#']});
            Programme.create({title: 'Taking endless rest', featured:true, published: new Date('1/1/2013'), tags: ['C#']});
            Programme.create({title: 'Pain Surviwal', featured: true, published: new Date('2/1/2013'), tags: ['C#']});
            Programme.create({title: 'How to rest without pain', featured: true, published: new Date('10/7/2013'), tags: ['C#']});
            Programme.create({title: 'How to Keep fit', featured: false, published: new Date('8/1/2013'), tags: ['C#']});
            Programme.create({title: 'Telling others to help you', featured: false, published: new Date('11/1/2013'), tags: ['C#']});
            Programme.create({title: "Writing pain records", featured: true, published: new Date('10/13/2013'), tags: ['C#']});
            Programme.create({title: 'Attending Suport groups', featured: false, published: new Date('10/1/2013'), tags: ['C#']});
            Programme.create({title: 'How to Deal with Family', featured: true, published: new Date('2/15/2013'), tags: ['C#']});
            Programme.create({title: 'Cooking for pain less', featured: true, published: new Date('7/1/2013'), tags: ['C#']});
        }
    });
}

exports.createDefaultProgrammes = createDefaultProgrammes;