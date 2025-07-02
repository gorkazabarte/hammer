locals {
  domain = "${var.environment}" == "prd" ? "${var.app_name}" : "${var.environment}.${var.app_name}"
}

module "route53" {
  source  = "terraform-aws-modules/route53/aws//modules/zones"
  version = "~> 5.0"

  zones = {
    "${local.domain}.com" = {
      comment = "${local.domain}.com"
    }
  }
}
