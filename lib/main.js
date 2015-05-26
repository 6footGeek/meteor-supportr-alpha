//db
groups = new Mongo.Collection('groups');

//default template layout
Router.configure({
  layoutTemplate: 'main'
});



//routes
Router.route('/', function() {
    this.render('home');
});
Router.route('/contact', function() {
    this.render('contact');
});
Router.route('/about', function() {
    this.render('about');
});
Router.route('/groups', function() {
    this.render('groups');
});

Router.route('/submit', function() {
    this.render('groupSubmit');
});

Router.route('/tweet', function() {
    this.render('tweetSubmit');
});

//individual group pages
Router.route('/group/:_id', {
    name: 'groupPage',
    //pull data for indiv group for this route
    data: function() {
        return groups.findOne(this.params._id);
    }
});

// Login and Register Routes
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
