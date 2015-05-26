   Template.group.events({
       "click .delete": function() {
           Meteor.call("deleteGroup", this._id);
       },
        'click': function() {
        Session.set('selectedGroup', this._id);
      }
   });

   Template.group.helpers({
       isOwner: function() {
           if (Meteor.userId() === this.owner) {
               return true;
           }
       },
       hasInstagram: function() {
           if (groups.findOne(this).instagram != "") {
               return true;
           }
       },
       hasFacebook: function() {
           if (groups.findOne(this).facebook != "") {
               return true;
           }
       },
       hasTwitter: function() {
           if (groups.findOne(this).twitter != "") {
               return true;
           }
       },
       hasEmail: function() {
           if (groups.findOne(this).email != "") {
               return true;
           }
       }
   });

