# MEAN Stack DevOps Assignment

## Problem Statement

Build and deploy a full-stack CRUD application using the MEAN stack (MongoDB, Express, Angular, Node.js). The app manages tutorials (ID, title, description, published status) with full CRUD and search functionality.

## Solution Overview

- **Frontend:** Angular (HTTPClient)
- **Backend:** Node.js + Express (REST API)
- **Database:** MongoDB
- **Containerization:** Docker for frontend, backend, and MongoDB
- **Orchestration:** Docker Compose
- **CI/CD:** GitHub Actions (build, push images, deploy to VM)
- **Reverse Proxy:** Nginx (port 80)

## Repository Structure

- `frontend/` – Angular client
- `backend/` – Node.js/Express API
- `docker-compose.yaml` – Multi-container orchestration
- `.github/workflows/` – CI/CD pipelines

## Setup & Deployment Instructions

1. **Clone the Repository**
	```sh
	git clone [YOUR_GITHUB_REPO_URL]
	cd crud-dd-task-mean-app
	```
2. **Configure Environment**
	- Update MongoDB credentials in `backend/app/config/db.config.js` if needed.
	- Update Docker image names and secrets as required.
3. **Build & Run with Docker Compose**
	```sh
	docker-compose up --build
	```
4. **Access the Application**
	- Frontend: http://[VM_PUBLIC_IP]/
	- Backend API: http://[VM_PUBLIC_IP]:8081/api/tutorials
5. **CI/CD Pipeline**
	- On push, GitHub Actions build and push Docker images to Docker Hub, then deploys to VM via SSH.
6. **Nginx**
	- Proxies all traffic to the frontend/backend, exposed on port 80.

## Infrastructure Details

- Cloud: GCP
- Docker Compose manages all services
- Nginx reverse proxy on port 80

## Deliverables

- GitHub repository: [crud-dd-task-mean-app](https://github.com/vineetha-mahendrakar/crud-dd-task-mean-app)
- Docker Hub images: 
    - [Frontend](https://hub.docker.com/r/mahendrakarvineethabai/crud-dd-task-mean-app-frontend)
    - [Backend](https://hub.docker.com/r/mahendrakarvineethabai/crud-dd-task-mean-app-backend)

- Screenshots:
  - CI/CD pipeline execution
  - Docker image build & push
  - Application UI in browser
  - Nginx setup and running containers

- Submission form: https://forms.office.com/r/f8Lfvm7BCL


## Submission
- **GitHub Repo:** https://github.com/vineetha-mahendrakar/crud-dd-task-mean-app
- **Submission Form:** https://forms.office.com/r/f8Lfvm7BCL

---