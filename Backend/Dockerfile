# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG PYTHON_VERSION=3.10.11
FROM python:${PYTHON_VERSION}-slim AS base

ARG SECRET_KEY
ARG DEBUG
ARG DATABASE_URL
ARG API_HOST
ARG FRONTEND_URL1
ARG FRONTEND_URL2

# Prevents Python from writing pyc files.
ENV PYTHONDONTWRITEBYTECODE=1
ENV SECRET_KEY=${SECRET_KEY}
ENV DEBUG=${DEBUG}
ENV DATABASE_URL=${DATABASE_URL}
ENV API_HOST=${API_HOST}
ENV FRONTEND_URL1=${FRONTEND_URL1}
ENV FRONTEND_URL2=${FRONTEND_URL2}

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt /app/

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt


# Copy the current directory contents into the container at /app
COPY . /app/
RUN python3 manage.py collectstatic --noinput
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

# Expose the port the app runs on
EXPOSE 8000

# Define environment variable
ENV PYTHONUNBUFFERED=1

# Run the application.
CMD uvicorn 'ecommerce.asgi:application' --host=0.0.0.0 --port=8000
