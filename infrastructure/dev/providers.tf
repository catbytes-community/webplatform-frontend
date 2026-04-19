provider "aws" {
  region  = "eu-west-2"
  profile = "terraform-catbytes-dev"
}

provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
  profile = "terraform-catbytes-dev"
}