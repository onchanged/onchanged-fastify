variable "product" {
  description = "Product name"
  type        = string
  default     = "later"
}

variable "env" {
  description = "Environment name"
  type        = string
}

variable "region" {
  description = "AWS region name"
  type        = string
  default     = "us-west-2"
}

variable "vpc_zones" {
  type    = list(string)
  default = [
    "usw2-az1",
    "usw2-az2",
    "usw2-az3",
    "usw2-az4"
  ]
}

variable "vpc_cidr_block" {
  type    = string
  default = "10.0.0.0/16"
}

variable "vpc_public_subnet_cidr_blocks" {
  type    = list(string)
  default = [
    "10.0.0.0/19",
    "10.0.32.0/19",
    "10.0.64.0/19",
    "10.0.96.0/19",
  ]
}

variable "vpc_private_subnet_cidr_blocks" {
  type    = list(string)
  default = [
    "10.0.128.0/19",
    "10.0.160.0/19",
    "10.0.192.0/19",
    "10.0.224.0/19"
  ]
}
