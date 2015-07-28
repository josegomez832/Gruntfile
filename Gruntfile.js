module.exports = function(grunt) {
  	// Do grunt-related things in here
  	grunt.initConfig({
  		pkg: grunt.file.readJSON('package.json'),
      watch:{
        css: {
          files: 'css/scss/*.scss',
          tasks:['sass', 'cssmin']
        }
      },
      //  Need to download SASS http://sass-lang.com/install 
      //  https://github.com/gruntjs/grunt-contrib-sass      
  		sass:{
  			dist:{
          options:{
            style: 'expanded'
          },
  				files:{
  					'css/style.css' : 'css/scss/style.scss'
  				}
  			}
  		},
      cssmin:{
        my_target:{
          files:[{
            expand:true,/*  */
            cwd: 'css/', /* */
            src: ['style.css', 'style.min.css'],
            dest: 'css/',
            ext: '.min.css'
          }]
        }
      }
  		
	});
  // Open terminal and run: $ grunt | which will watch for your file changes 
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  //  Converts .scss files to .css 
	grunt.loadNpmTasks('grunt-contrib-sass');	
  //  Minify your .css to .min.css 
  grunt.loadNpmTasks('grunt-contrib-cssmin'); 
  //  When $ grunt command is running this is the default task 
	grunt.registerTask('default',['watch']); 

};
