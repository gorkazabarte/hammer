variable "app_name" {
  default     = "gzabarte"
  description = "The name of the application for which the Route 53 zone is being created."
  type        = string
}

variable "environment" {
  default     = "dev"
  description = "The environment for which the Route 53 zone is being created (e.g., dev, staging, prod)."
  type        = string
}

variable "environment_prefix" {
  default     = "www.dev."
  description = "The environment prefix for which the Route 53 zone is being created (e.g., www.dev, www.stg)."
  type        = string
}
