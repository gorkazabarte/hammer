variable "acm_arn" {
  default     = ""
  description = "The ARN of the ACM certificate"
  type        = string
}

variable "app_name" {
  default     = "gzabarte"
  description = "The name of the application for which the Route 53 zone is being created."
  type        = string
}

variable "aws_region" {
  default     = "us-west-2"
  description = "AWS region"
  type        = string
}

variable "environment" {
  default     = "dev"
  description = "The environment for which the Route 53 zone is being created (e.g., dev, staging, prod)."
  type        = string
}
