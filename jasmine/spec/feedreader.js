/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not
         * empty.
         */
        allFeeds.forEach(function(feed) {
            it('should all have defined URLs that are not empty', function() {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });


        /* This test loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is not
         * empty.
         */
        allFeeds.forEach(function(feed) {
            it('should all have defined names that are not empty', function() {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    /* "The menu" test suite */
    describe('The menu', function() {
        /* This test ensures the menu element is hidden by default.
         * The menu is hidden by adding the class menu-hidden to the
         * body, and it is removed by removing that class from the body.
         */
         it('should be hidden by default', function() {
             expect($('body')).toHaveClass('menu-hidden');
         });

         /* This test that ensures the menu changes visibility when
          * the menu icon is clicked. This test has two expectations:
          * does the menu display when clicked and does it hide when
          * clicked again.
          */
        it('should toggle visibility when clicked', function() {
            var menuIcon = $('.menu-icon-link');
            var spyEvent = spyOnEvent(menuIcon, 'click');
            $(menuIcon).trigger('click');

            // Does the menu display when clicked
            expect($('body')).not.toHaveClass('menu-hidden');

            $(menuIcon).trigger('click');

            // Does the menu display when clicked again
            expect($('body')).toHaveClass('menu-hidden');
        });
    });

    /* "Initial Entries" test suite */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

    /* This test ensures when the loadFeed function is called and
     * completes its work, there is at least a single .entry element
     * within the .feed container. Because loadFeed() is asynchronous,
     * this test requires the use of Jasmine's beforeEach and
     * asynchronous done() function.
     */
        it('should have at least one .entry element in the .feed container', function() {
            var entryLen = $('.feed .entry').length;
              expect(entryLen).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection"

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */


}());
