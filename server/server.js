Meteor.methods({
    addGroup: function(name, website, twitter, facebook, instagram, email, info, tags) {
        // if (!Meteor.userId()) {
        //     throw new Meteor.Error("not-authorised");
        // }
        groups.insert({
            "name": name,
            "website": website,
            "twitter": twitter,
            "facebook": facebook,
            "instagram": instagram,
            "email": email,
            "info": info,
            "tags": tags,
            "createdAt": new Date(), // current time
            "owner": Meteor.userId(), // _id of logged in user
            "username": Meteor.user().profile.name // username of logged in user
        });
    },
    deleteGroup: function(groupId) {
        groups.remove(groupId);
    },
    sendTweet: function(tweet) {
        Twit = new TwitMaker({
            consumer_key: Meteor.user().profile.twit_consumer_key,
            consumer_secret: Meteor.user().profile.twit_consumer_secret,
            access_token: Meteor.user().profile.twit_access_token,
            access_token_secret: Meteor.user().profile.twit_access_token_secret
        });
        Twit.post('statuses/update', {
            status: tweet
        }, function(err, data, response) {
            console.log(data);
        });
    },
    addTwitterAPI: function(ck, cs, at, ats) {
        Meteor.users.update({
            _id: Meteor.userId()
        }, {
            $set: {
                profile: {
                    twit_consumer_key: ck,
                    twit_consumer_secret: cs,
                    twit_access_token: at,
                    twit_access_token_secret: ats
                }
            }
        });

    }
});




//twitter stuff (need to add per user (accounts.profile storage?))
// var tck = Meteor.users.profile.twit_consumer_key;
// var tcs = Meteor.users.profile.twit_consumer_secret;
// var tat = Meteor.users.profile.twit_access_token;
// var tats = Meteor.users.profile.twit_access_token_secret;




//subscribe to db's
Meteor.publish("groups", function() {
    return groups.find();
});
