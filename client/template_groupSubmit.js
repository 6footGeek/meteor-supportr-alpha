Template.groupSubmit.events({
    'submit': function() {


        var name = event.target.name.value;
        var website = event.target.website.value;
        var email = event.target.email.value;
        var twitter = event.target.twitter.value;
        var facebook = event.target.facebook.value;
        var instagram = event.target.instagram.value;
        var info = event.target.info.value;
        var tags = event.target.tags.value;
        if (name === "" && website === "" && email === "" && twitter === "" && facebook === "" && instagram === "" && info === "" && tags === "") {
            alert("Add some info to submit!");
            console.log("Form not submitted");
            event.preventDefault();
            return false;

        } else {
            Meteor.call("addGroup", name, website, twitter, facebook, instagram, email, info, tags);

            event.target.name.value = "";
            event.target.website.value = "";
            event.target.email.value = "";
            event.target.twitter.value = "";
            event.target.facebook.value = "";
            event.target.instagram.value = "";
            event.target.info.value = "";
            event.target.tags.value = "";
            console.log("Form submitted");
            event.preventDefault();
            return false;

        }
    }
});
