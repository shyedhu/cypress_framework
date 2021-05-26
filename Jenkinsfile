pipeline {
  agent { dockerfile true }

  stages {
    // first stage installs node dependencies and Cypress binary
    stage('build') {
      steps {
        sh 'node --version'
        sh 'docker build -t cypress .'
      }
    }
  }
} 
