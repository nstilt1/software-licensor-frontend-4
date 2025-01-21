#!/bin/bash

# Check if an argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <argument>"
  exit 1
fi

# Assign the argument to a variable
ARGUMENT=$1

# Run the npx command with the argument
npx shadcn@latest add $ARGUMENT