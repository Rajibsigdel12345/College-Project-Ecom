# syntax=docker/dockerfile:1

ARG PYTHON_VERSION=3.10.11
FROM python:${PYTHON_VERSION}-slim AS base

# Define build arguments
ARG SECRET_KEY
ARG DEBUG
ARG DATABASE_URL
ARG API_HOST
ARG FRONTEND_URL1
ARG FRONTEND_URL2

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
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
COPY db.sqlite3 /data/
# Run Django management commands
RUN python3 manage.py collectstatic --noinput
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

# Expose the port the app runs on
EXPOSE 8000

# Run the application
CMD ["uvicorn", "ecommerce.asgi:application", "--host", "0.0.0.0", "--port", "8000"]
