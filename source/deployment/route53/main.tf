locals {
  domain_prefix = var.environment == "prd" ? var.app_name : "${var.environment_prefix}.${var.app_name}"
}

module "route53" {
  source  = "terraform-aws-modules/route53/aws//modules/zones"
  version = "~> 5.0"

  zones = {
    "${local.domain_prefix}.com" = {
      comment = "${local.domain_prefix}.com"
    }
  }
}
