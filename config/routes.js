/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //views

  '/': {
    view: 'index'
  },
  '/login':{
    view:'pages/login'
  },
  '/register':{
    view:'pages/register'
  },
  '/checkout':{
    view:'pages/checkout'
  },
  '/shopping':{
    view:'pages/shopping'
  },
  '/category':{
    view:'pages/category'
  },
  '/about':{
    view:'pages/about'
  },
  '/account':{
    view:'pages/account'
  },
  '/delivery':{
    view:'pages/delivery'
  },
  '/forget-password':{
    view:'pages/forget-password'
  },
  '/verify':{
    view:'pages/verify'
  },
  '/account-info':{
    view:'pages/account-info'
  },
  '/change-password':{
    view:'pages/change-password'
  },
  '/order-history':{
    view:'pages/order-history'
  },
  '/payment-history':{
    view:'pages/payment-history'
  },
  '/order-info':{
    view:'pages/order-info'
  },
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/




  '/dashboard/index':{
      view:'dashboard/index'
  },
  '/dashboard/category':{
    view:'dashboard/pages/category'
  },
  '/dashboard/product':{
    view:'dashboard/pages/product'
  },
  '/dashboard/customer':{
    view:'dashboard/pages/customer'
  },
  '/dashboard/user':{
    view:'dashboard/pages/user'
  },
  '/dashboard/partner':{
    view:'dashboard/pages/partner'
  },
  '/dashboard/slide':{
    view:'dashboard/pages/slide'
  },
  '/admin/login':{
    view:'dashboard/pages/login'
  },
  
  '/upload-file':{
    view: 'uploadfile'  // view 'uploadfile' in views directory will loaded automatically
  },

  //Categories
  'get /categories':'CategoryController.findall',
  'get /categories/:id':'CategoryController.find',
  'post /categories':'CategoryController.create',
  'put /categories/:id':'CategoryController.update',
  'delete /categories/:id':'CategoryController.delete',
  'get /categories/list/name':'CategoryController.findCategoriesName',
  'get /categories/list/parent':'CategoryController.findParentCategories',
  'get /categories/list/child':'CategoryController.findChildCategories',

  //Products
  'get /products':'ProductController.findall',
  'get /products/:id':'ProductController.find',
  'post /products':'ProductController.create',
  'put /products/:id':'ProductController.update',
  'delete /products/:id':'ProductController.delete',


  //Users
  'get /users':'UserController.findall',
  'get /users/:id':'UserController.find',
  'post /users':'UserController.create',
  'put /users/:id':'UserController.update',
  'delete /users/:id':'UserController.delete',


  //Partner
  'get /partners':'PartnerController.findall',
  'get /partners/:id':'PartnerController.find',
  'post /partners':'PartnerController.create',
  'put /partners/:id':'PartnerController.update',
  'delete /partners/:id':'PartnerController.delete',


  //Slide
  'get /slides':'SlideController.findall',
  'get /slides/:id':'SlideController.find',
  'post /slides':'SlideController.create',
  'put /slides/:id':'SlideController.update',
  'delete /slides/:id':'SlideController.delete'
};
