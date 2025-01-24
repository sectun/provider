#!/bin/bash

# load environment variables from .env file if exist 
if [ -f .env ]; then
  set -a # all the vars that are created or modified will be exported
  source .env
  set +a # stop exporting
fi

# git related things
export GITHUB_SHA=$(git rev-parse --short HEAD)
export GITHUB_BRANCH=$(git rev-parse --abbrev-ref HEAD)