Template.tweetSubmit.events({
    'submit .tweetAPI': function() {
        var ck = event.target.ck.value;
        var cs = event.target.cs.value;
        var at = event.target.at.value;
        var ats = event.target.ats.value;
        if (ck === "" || cs === "" || at === "" || ats === "") {
            alert("Add all keys to tweet!");
            console.log("Form not submitted");
            event.preventDefault();
            return false;

        } else {
            Meteor.call("addTwitterAPI", ck, cs, at, ats);
            console.log("Form submitted");
            event.preventDefault();
            return false;

        }
    },


    'submit .sendTweet': function() {
        var tweet = event.target.tweet.value;
        if (tweet === "") {
            alert("need to add a message to tweet!");
            event.preventDefault();
            return false;
        } else {
            Meteor.call("sendTweet", tweet);
            event.preventDefault();
            return false;
        }

    }
});
