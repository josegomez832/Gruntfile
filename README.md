## Set up

Download repository `https://github.com/josegomez832/Gruntfile.git`

You'll need to make a few changes to the `package.json` file like updating the name. You'll also need to edit the Gruntfile.js and update the path to your css/scss files. You can install new plugins which ever best fits your project. **Note that you do not need to create your stylesheets. You can create your SCSS file and when you `grunt` in your project directory it should create your regular css file and a minified version of your css.** You can find more at <a href="http://gruntjs.com/plugins/contrib">http://gruntjs.com/plugins/contrib</a>. But so far this should do the trick for our development purposes.

## Getting up and running with Grunt

If you haven't installed Grunt you can visit <a href="http://gruntjs.com/getting-started">here</a>.

Or follow my command:

`npm install -g grunt-cli`

This will put the `grunt` command in your system path, allowing it to be run from any directory.

Note that installing `grunt-cli` does not install the Grunt task runner! The job of the Grunt CLI is simple: run the version of Grunt which has been installed next to a Gruntfile. This allows multiple versions of Grunt to be installed on the same machine simultaneously.

## Working with an existing Grunt project

Assuming that the Grunt CLI has been installed and that the project has already been configured with a package.json and a Gruntfile, it's very easy to start working with Grunt:

- Change to the project's root directory aka `cd`. 
- Install project dependencies with `npm install`.
- Run Grunt with `grunt`. Grunt will now `watch` for any new changes from your scss file.
- To stop `grunt` press `ctrl + c`