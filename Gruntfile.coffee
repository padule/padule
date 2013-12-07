module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    watch:
      coffee:
        files: ['cake/app/webroot/coffee/**/*.coffee', 'cake/app/webroot/coffee/*.coffee', 'cake/app/webroot/coffee/**/**/*.coffee']
        tasks: 'coffee'
      compass:
        files: ['cake/app/webroot/scss/**/*.scss']
        tasks: 'compass'
      haml:
        files: ['cake/app/webroot/**/*.haml', 'cake/app/View/**/*.haml']
        tasks: 'haml'
      eco:
        files: ['cake/app/webroot/coffee/templates/*.eco']
        tasks: 'eco'

    coffee:
      compile:
        files: [
          expand: true
          cwd: 'cake/app/webroot/coffee/'
          src: ['**/*.coffee']
          dest: 'cake/app/webroot/js/'
          ext: '.js'
        ]
    compass:
      dist:
        options: {}
    haml:
      dist:
        files:
          'cake/app/View/SeekerSchedules/index.ctp': 'cake/app/View/SeekerSchedules/index.haml'
          'cake/app/View/Users/mypage.ctp': 'cake/app/View/Users/mypage.haml'
          'cake/app/View/Users/login.ctp': 'cake/app/View/Users/login.haml'
          'cake/app/View/Users/complete.ctp': 'cake/app/View/Users/complete.haml'
          'cake/app/webroot/index.html': 'cake/app/webroot/index.haml'
          'cake/app/webroot/privacy.html': 'cake/app/webroot/privacy.haml'

    eco:
      app:
        options:
          basePath: 'cake/app/webroot/coffee'
        files:
          'cake/app/webroot/js/templates/templates.js': ['cake/app/webroot/coffee/templates/*.eco']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib'
  grunt.loadNpmTasks 'grunt-compass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-haml'
  grunt.loadNpmTasks 'grunt-eco'

  grunt.registerTask 'default', ['watch']
  return
