pipeline {
	agent any

	environment {
		REGISTRY_URL = 'ghcr.io'
		IMAGE_NAME = sh(script: 'echo $GIT_URL | sed -E "s/.*[:\\/]([^\\/]+\\/[^\\/]+)\\.git$/\\1/"', returnStdout: true).trim()
		IMAGE_TAG = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
		IMAGE_URL = "${REGISTRY_URL}/${IMAGE_NAME}:${IMAGE_TAG}"
		MOUNT_URL = "/mnt/data/services/${IMAGE_NAME}"

		CONTAINER_NAME = sh(script: 'echo $GIT_URL | sed -E "s/.*[:\\/]([^\\/]+\\/[^\\/]+)\\.git$/\\1/" | tr "/" "-"', returnStdout: true).trim()
	}

	stages {
		stage('Checkout') {
			steps {
				checkout scm
			}
		}

        stage('Debug') {
            steps {
                script {
                    sh "hostname"
                    sh "whoami"
                    sh "ls -l /mnt/data/services/jeamxn/portfolio-jeamxn/"
                    sh "cat /mnt/data/services/jeamxn/portfolio-jeamxn/.env || echo '.env 파일 없음'"
                }
            }
        }

		stage('Build Image') {
			steps {
				script {
					sh """
						DOCKER_BUILDKIT=1 docker build \
						--secret id=env,src=${env.MOUNT_URL}/.env \
						-t ${env.IMAGE_URL} .
					"""
				}
			}
		}

		stage('Push Image') {
			steps {
				script {
					docker.withRegistry('https://ghcr.io', 'ghcr') {
						docker.image(env.IMAGE_URL).push()
						docker.image(env.IMAGE_URL).push("latest")
					}
				}
			}
		}

		stage('Remove Existing Container') {
			steps {
				script {
					sh "docker rm -f ${env.CONTAINER_NAME} || true"
				}
			}
		}

		stage('Deploy Container') {
			steps {
				script {
					sh """
						docker create \
							--name ${env.CONTAINER_NAME} \
							--restart always \
							--network proxy \
							--env-file ${env.MOUNT_URL}/.env \
							${env.IMAGE_URL}
					"""
					sh "docker start ${env.CONTAINER_NAME}"
				}
			}
		}
	}
}