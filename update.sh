# Update the API interfaces generated code files
docker build -t api_interfaces .

# Start a container based on the "api_interfaces" image
docker run --name api_interfaces -d api_interfaces

# Copy the files in the "/gooseai" directory out from the container
docker cp api_interfaces:/gooseai .

# Stop and remove the container
docker stop api_interfaces
docker rm api_interfaces
