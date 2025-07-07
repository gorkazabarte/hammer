locals {
  domain = "${var.app_name}.com"
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
