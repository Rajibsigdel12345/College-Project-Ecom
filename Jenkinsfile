pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
    }

    stages {
        stage('Pull Docker Image') {
            steps {
                script {
                    // def branchName = env.GIT_BRANCH.split('/')[1]
                    def serviceTag = "razevesigdel/ecommerce:latest"

                    docker.withRegistry('https://registry.hub.docker.com', DOCKER_CREDENTIALS_ID) {
                        docker.image(serviceTag).pull()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}
