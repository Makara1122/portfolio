pipeline {
    agent any
    environment {
        DOCKER_HUB_ACCESS_TOKEN = credentials('docker-hub-access-token')
    }
    stages {
        stage('Build Image') {
            steps {
                script {
                    def imageName = "mommakara026/portfolio"
                    def imageExists = sh(script: "docker images -q ${imageName}", returnStdout: true).trim()

                    if (imageExists) {
                        echo "Image ${imageName} already exists. Deleting it."
                        sh "docker rmi -f ${imageName}"
                    } else {
                        echo "Image ${imageName} does not exist."
                    }

                    echo "Login to Docker Hub"
                    sh "echo \$DOCKER_HUB_ACCESS_TOKEN | docker login -u mommakara026 --password-stdin"

                    echo "Building the Docker image"
                    sh "docker build --platform linux/amd64 -t ${imageName} ."
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                script {
                    def imageName = "mommakara026/portfolio"

                    echo "Login to Docker Hub"
                    sh "echo \$DOCKER_HUB_ACCESS_TOKEN | docker login -u mommakara026 --password-stdin"
                    
                    echo "Pushing the Docker image"
                    sh "docker push ${imageName}"
                }
            }
        }

        // stage('Run ansible with shell') {
        //     steps {
        //         script {
        //             echo "Running ansible playbook to install Nginx"
        //             sh "ansible-playbook -i /var/lib/jenkins/ansible/inventory.ini /var/lib/jenkins/ansible/playbook/install_nginx.yml"
        //         }
        //     }
        //  } 

        stage('Run Ansible Playbook on myserver') {
            steps {
                script {
                    echo "Running Ansible playbook on myserver"
                    sh """
                    ssh -i \$SSH_KEY root@34.143.160.110 << EOF
                    ansible-playbook -i /root/ansible/inventory.ini /root/ansible/playbook/install_nginx.yml
                    EOF
                    """
                }
            }
        }
    }
}