Meteor.subscribe("groups");


//sort the data
Template.groups.helpers({
    groups: function() {
        return groups.find({}, {
            sort: {
                createdAt: -1
            }
        });
    }
});
