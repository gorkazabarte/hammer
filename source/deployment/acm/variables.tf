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

variable "zone_arn" {
  default     = ""
  description = "The arn of the Route53 Hosted Zone"
  type        = string
}

variable "zone_id" {
  default     = {}
  description = "The id of the Route53 Hosted Zone"
  type        = map(string)
}
