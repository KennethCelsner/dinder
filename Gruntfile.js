module.exports = function(grunt) {

    /*-------------------------------------

       Charset

    ---------------------------------------*/

    grunt.file.defaultEncoding = 'ISO-8859-1';


    /*-------------------------------------

       Konfigurering av Grunt

    ---------------------------------------*/

    grunt.initConfig({

        // Vårt package
        pkg: grunt.file.readJSON('package.json'),
        
    });
    
    /*-------------------------------------

       Ladda plugins

    ---------------------------------------*/

    grunt.loadNpmTasks('PLUGIN');
    
    
    /*-------------------------------------
    
        Registrera tasks
    
    ---------------------------------------*/
    
    grunt.registerTask('watch', [

    ]);
};
