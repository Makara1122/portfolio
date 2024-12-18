pipeline {
    agent any
    stages {
        stage('Build Image') {
            steps {
                
                script {
                    def imageName = "mommakara026/portfolio"
                    def imageExists = sh(script: "docker images -q ${imageName}", returnStdout: true).trim()

                    if (imageExists) {
                        echo "Image {$imageName} already exists. Deleting it."
                        sh "docker rmi -f ${imageName}"
                    } else {
                        echo "Image {$imageName} does not exist."
                    }

                    echo "Building the Docker image"
                    sh "docker build --platform linux/amd64 -t ${imageName} ."
                }
            }
        }
    }
}