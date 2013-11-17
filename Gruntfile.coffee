module.exports = (grunt)->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    watch:
      coffee:
        files: ['cake/app/webroot/coffee/**/*.coffee']
        tasks: 'coffee'
      compass:
        files: ['cake/app/webroot/scss/**/*.scss']
        tasks: 'compass'
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

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib'
  grunt.loadNpmTasks 'grunt-compass'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'default', ['watch']
  return
