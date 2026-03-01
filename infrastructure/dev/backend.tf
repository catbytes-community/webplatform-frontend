terraform {
  backend "s3" {
    bucket         = "catbytes-terraform-state-463470984434"
    key            = "dev/terraform.tfstate"
    region         = "eu-west-2"
    dynamodb_table = "catbytes-terraform-locks"
    encrypt        = true
  }
}