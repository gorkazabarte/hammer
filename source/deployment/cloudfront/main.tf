locals {
  domain = "${var.environment}" == "prd" ? "${var.app_name}.com" : "${var.environment}.${var.app_name}.com"
}

module "cloudfront" {
  source = "terraform-aws-modules/cloudfront/aws"

  aliases                       = ["${local.domain}", "www.${local.domain}"]
  comment                       = title("${var.app_name}")
  create_origin_access_identity = true
  enabled                       = true
  is_ipv6_enabled               = true
  price_class                   = "PriceClass_100"
  retain_on_delete              = false
  wait_for_deployment           = false

  default_cache_behavior = {
    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods  = ["GET", "HEAD"]
    compress        = true
    query_string    = true
    target_origin_id           = "${var.environment}-${var.app_name}-frontend"
    viewer_protocol_policy     = "allow-all"
  }

  origin_access_identities = {
    "${var.environment}-${var.app_name}-frontend" = "CloudFront access to S3 Bucket"
  }

  origin = {
    "${var.environment}-${var.app_name}-frontend" = {
      domain_name = "${var.environment}-${var.app_name}-frontend.s3.${var.aws_region}.amazonaws.com"
      s3_origin_config = {
        origin_access_identity = "${var.environment}-${var.app_name}-frontend"
      }
    }
  }

  ordered_cache_behavior = [
    {
      allowed_methods        = ["GET", "HEAD", "OPTIONS"]
      cached_methods         = ["GET", "HEAD"]
      compress               = true
      query_string           = true
      path_pattern           = "/*"
      target_origin_id       = "${var.environment}-${var.app_name}-frontend"
      viewer_protocol_policy = "redirect-to-https"
    }
  ]

  viewer_certificate = {
    acm_certificate_arn = var.acm_arn
    ssl_support_method  = "sni-only"
  }
}
