output "zone_id" {
  description = "Zone id of the Route53 zone"
  value       = module.route53.route53_zone_zone_id
}

output "zone_arn" {
  description = "Zone arn of the Route53 zone"
  value       = module.route53.route53_zone_zone_arn
}
