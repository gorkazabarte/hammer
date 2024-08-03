#!/bin/bash
set -e

echo "[INFO] ${APP_NAME} deployment is starting"
cd ./source/deployment || exit

echo "[INFO] Deploying Route 53 for application: ${APP_NAME} in environment: ${ENVIRONMENT}"
cd ./route53 || exit
terragrunt apply --all --non-interactive -no-color
