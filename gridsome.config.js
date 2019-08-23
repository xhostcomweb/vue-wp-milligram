module.exports = {
  siteName: 'Milligram Vue Wordpress',
  siteDescription: 'A Milligram Vue Wordpress starter',
  plugins: [
     { 
        use: '@gridsome/source-wordpress',
        options: {
        baseUrl: "http://vuewp.xhostcom.com", // required
        apiBase: 'wp-json',
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        splitPostsIntoFragments: true, //Split html posts into fragments representing html blocks or images
        downloadRemoteImagesFromPosts: true, //Download remote images
        /*postImagesLocalPath: '/Users/username/this/must/be/full/path/', //Full path with '/' in the end*/
        routes: {
        post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
        post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        }
      }
    }
   ]
}


