#!/bin/bash

# Define variables
COMMIT_MESSAGE="$1"  # First argument passed to script
BRANCH_NAME="main"
REMOTE_NAME="origin"
DEFAULT_MESSAGE="Update: Regular code update"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# If no commit message is provided, use default
if [ -z "$COMMIT_MESSAGE" ]; then
    COMMIT_MESSAGE="$DEFAULT_MESSAGE"
fi

# Git commands with color output
echo -e "${YELLOW} Adding all changes...${NC}"
git add .

echo -e "${YELLOW} Committing with message: ${GREEN}$COMMIT_MESSAGE${NC}"
git commit -m "$COMMIT_MESSAGE"

echo -e "${YELLOW}Pushing to ${BRANCH_NAME}...${NC}"
git push $REMOTE_NAME $BRANCH_NAME

echo -e "${GREEN}Done! All changes have been pushed to $BRANCH_NAME${NC}"