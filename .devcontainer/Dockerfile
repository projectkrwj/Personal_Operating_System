FROM node:20

RUN apt-get update && \
    apt-get install -y \
    libx11-dev libxkbfile-dev libsecret-1-dev \
    xvfb \
    libnss3 libatk1.0-0 libatk-bridge2.0-0 \
    libgtk-3-0 libgbm-dev libasound2 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /workspace
