pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }

  stages {
    // first stage installs node dependencies and Cypress binary
    stage('build') {
      steps {
        sh 'npm install'
        sh './node_modules/.bin/cypress run -b chrome -e ENV=https://shyedhu.github.io/demo.shyedhu.com/'
      }
    }
  }
}