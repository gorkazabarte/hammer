locals {
  domain = "${var.environment}" == "prd" ? "${var.app_name}.com" : "${var.environment}.${var.app_name}.com"
}

module "route53" {
  source  = "terraform-aws-modules/route53/aws//modules/zones"
  version = "~> 5.0"

  zones = {
    "${local.domain}" = {
      comment = "${local.domain}"
    }
  }
}
