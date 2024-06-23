#!/bin/bash

# Push to development branch
git push origin development

# Checkout to main branch
git checkout main

# Pull the latest changes from remote main branch
git pull origin main

# Merge changes from development to main
git merge development

# Push merged changes to main branch
git push origin main

# Switch back to development branch
git checkout development
