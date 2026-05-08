# Three-Tier Application Deployment on Kubernetes

A production-style Three-Tier Todo Application deployed on Kubernetes using Docker, KIND, NGINX Ingress Controller, Persistent Storage, and GitHub Actions CI/CD on AWS EC2.

This project demonstrates practical DevOps and Cloud Engineering concepts including containerization, Kubernetes orchestration, ingress-based routing, persistent storage management, and CI/CD automation.

---

# Project Overview

The application follows a modern three-tier architecture:

```text
Client Layer (React Frontend)
            │
            ▼
NGINX Ingress Controller
            │
            ▼
Application Layer (Node.js Backend API)
            │
            ▼
Database Layer (MongoDB)
```

The application is containerized using Docker and deployed on Kubernetes using declarative YAML manifests.

---

# Tech Stack

## Frontend
- React.js

## Backend
- Node.js
- Express.js

## Database
- MongoDB

## DevOps & Infrastructure
- Docker
- Kubernetes
- KIND (Kubernetes in Docker)
- NGINX Ingress Controller
- GitHub Actions
- AWS EC2
- DockerHub

---

# Kubernetes Components Used

| Kubernetes Resource | Purpose |
|---------------------|---------|
| Namespace | Isolates application resources |
| Deployment | Manages pod lifecycle and scaling |
| Service | Enables internal communication |
| ConfigMap | Stores non-sensitive configuration |
| Secret | Stores sensitive credentials securely |
| Ingress | Exposes services externally |
| PersistentVolume | Provides persistent database storage |
| PersistentVolumeClaim | Requests storage for MongoDB |
| Liveness Probe | Detects unhealthy containers |
| Readiness Probe | Controls traffic routing to healthy pods |

---

# Project Structure

```bash
Three-tier-App-Deployment/
│
├── backend/
│   ├── Dockerfile
│   └── source code
│
├── frontend/
│   ├── Dockerfile
│   └── source code
│
├── k8s_manifests/
│   ├── backend/
│   ├── frontend/
│   ├── database/
│   ├── config/
│   ├── ingress/
│   └── namespace.yaml
│
└── .github/
    └── workflows/
        └── ci-cd.yaml
```

---

# Key Features

- Multi-tier Kubernetes architecture  
- Containerized frontend and backend services  
- NGINX Ingress Controller for external routing  
- Kubernetes ConfigMaps and Secrets  
- Persistent storage using PV and PVC  
- Health monitoring using liveness and readiness probes  
- Automated CI/CD pipeline using GitHub Actions  
- Docker image build and push automation  
- Kubernetes deployment automation  
- Deployed on AWS EC2 using KIND cluster  

---
# Deployment Architecture

```text
                    Internet
                        │
                        ▼
              NGINX Ingress Controller
                        │
        ┌───────────────┴───────────────┐
        ▼                               ▼
Frontend Service                Backend Service
        │                               │
        └───────────────┬───────────────┘
                        ▼
                  MongoDB Service
                        │
                        ▼
             Persistent Volume Storage
```
---

# Configuration Management

## ConfigMap
Used for storing application configuration such as:

- MongoDB connection string
- Backend API URL

## Secret
Used for securely managing:

- MongoDB username
- MongoDB password

---

# Persistent Storage

MongoDB data persistence is implemented using:

- PersistentVolume (PV)
- PersistentVolumeClaim (PVC)

This ensures database data remains available even if pods restart or are recreated.

---

# Ingress-Based Routing

NGINX Ingress Controller is used for path-based routing.

| Path | Destination |
|------|-------------|
| `/` | Frontend Service |
| `/api` | Backend Service |

---

# CI/CD Pipeline

GitHub Actions automates the application delivery workflow.

## CI/CD Flow

```text
Developer Pushes Code
          │
          ▼
GitHub Actions Workflow Triggered
          │
          ▼
Build Docker Images
          │
          ▼
Push Images to DockerHub
          │
          ▼
Deploy Updated Images to Kubernetes
```

---

# GitHub Actions Workflow

The pipeline performs:

- Source code checkout
- DockerHub authentication
- Frontend image build and push
- Backend image build and push
- Kubernetes deployment update

---

# 🚀 Setup Instructions

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

cd YOUR_REPOSITORY
```

---

## Create KIND Cluster

```bash
kind create cluster --name three-tier-cluster
```

---

## Install NGINX Ingress Controller

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

---

## Deploy Kubernetes Resources

```bash
kubectl apply -f k8s_manifests/
```

---

## Verify Deployments

```bash
kubectl get pods -n three-tier
```

```bash
kubectl get svc -n three-tier
```

---

## Access Application

Port-forward ingress controller:

```bash
kubectl port-forward svc/ingress-nginx-controller 8080:80 -n ingress-nginx --address 0.0.0.0
```

Access application in browser:

```text
http://EC2-PUBLIC-IP:8080
```

---

# Docker Images

Docker images are hosted on DockerHub.

Example:

```text
docker pull your-dockerhub-username/frontend:latest
docker pull your-dockerhub-username/backend:latest
```

---

# Required GitHub Secrets

Add the following GitHub Actions secrets:

| Secret Name |
|-------------|
| DOCKERHUB_USERNAME |
| DOCKERHUB_PASSWORD |
| EC2_HOST |
| EC2_USER |
| EC2_SSH_KEY |

---