docker build -t sachinpoddar/my-store:latest -f ./Dockerfile .

docker push sachinpoddar/my-store:latest

kubectl apply -f k8s