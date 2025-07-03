locals {
  domain = "${var.environment}" == "prd" ? "${var.app_name}" : "${var.environment}.${var.app_name}"
}

module "acm" {
  source  = "terraform-aws-modules/acm/aws?ref=6.0.0"
  version = "~> 5.0"

  domain_name  = "${local.domain}.com"
  zone_id      = var.zone_id["${local.domain}.com"]
  region       = "us-east-1"
  subject_alternative_names = [
    "${local.domain}.com",
    "*.${local.domain}.com",
  ]
  validation_method = "DNS"
  wait_for_validation = true
}
