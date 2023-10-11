#!/bin/bash

set -e

# Launch nginx in background
nginx

# Launch pm2 in foreground
pm2-runtime start ecosystem.config.js