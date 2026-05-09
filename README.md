# Three-Tier Todo Application on Kubernetes

A full-stack three-tier Todo application deployed on Kubernetes using Docker, AWS EC2, KIND cluster, MongoDB, NGINX Ingress Controller, and GitHub Actions CI/CD.

This project demonstrates containerization, Kubernetes orchestration, ingress-based routing, persistent storage management, secret handling, and automated CI/CD workflows for deploying a modern cloud-native application.

---

# Architecture

```text
                     User
                       │
                       ▼
          NGINX Ingress Controller
                       │
         ┌─────────────┴─────────────┐
         ▼                           ▼
Frontend Service              Backend Service
   (React)                  (Node.js / Express)
                                       │
                                       ▼
                                  MongoDB
                                       │
                                       ▼
                         Persistent Volume (PV)
```

---

