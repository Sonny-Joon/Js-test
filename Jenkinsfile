pipeline {
    agent any
    environment {
                CHROME_LOGS = '/var/jenkins_home/jobs/ProtractorTests2/workspace/chromeLogs/'
                ALLURE_REPORT = '/var/jenkins_home/jobs/ProtractorTests2/workspace/allure-report/'
                ALLURE_RESULTS = '/var/jenkins_home/jobs/ProtractorTests2/workspace/allure-results/'
                JENKINS_BUILD_RESULT = '/var/jenkins_home/jobs/ProtractorTests2/workspace/jenkinsBuildResult.json'
            }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm webdriver-manager update'
            }
        }
      
        stage('Test') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh "npm test"
                }
            }
        }
        stage('Allure Report') {
            steps {
                allure includeProperties: false,
                             jdk: '',
                             results: [[path: 'allure-results']]
            }
        }
  
    }
}
