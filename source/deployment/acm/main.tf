locals {
  domain = "${var.environment}" == "prd" ? "${var.app_name}.com" : "${var.environment}.${var.app_name}.com"
}

module "acm" {
  source  = "terraform-aws-modules/acm/aws"
  version = "6.0.0"

  domain_name = local.domain
  zone_id     = var.zone_id["${local.domain}"]
  region      = "us-east-1"
  subject_alternative_names = [
    "${local.domain}",
    "*.${local.domain}",
  ]
  validation_method   = "DNS"
  wait_for_validation = true
}
