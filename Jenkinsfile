pipeline {
    agent
    environment {
                CHROME_LOGS = '/var/jenkins_home/jobs/ProtractorTests2/workspace/chromeLogs/'
                ALLURE_REPORT = 'C:/Users/anduser/.jenkins/workspace/ProtractorTests2/allure-report/'
                ALLURE_RESULTS = 'C:/Users/anduser/.jenkins/workspace/ProtractorTests2/allure-results/'
                JENKINS_BUILD_RESULT = '/var/jenkins_home/jobs/ProtractorTests2/workspace/jenkinsBuildResult.json'
            }
    stages {
        stage('Clear tmp Data') {
            steps {
                bat 'rm -Rf "${ALLURE_REPORT}"*'
                bat 'rm -Rf "${ALLURE_RESULTS}"*'
            }
        }
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
      
        stage('Test') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat "npm test"
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
