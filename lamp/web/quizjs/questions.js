// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "In an AWS account, a SysOps administrator activated AWS CloudTrail. CloudTrail must be promptly re-enabled if it has been deactivated."
        + " What should the SysOps administrator do INSTEAD OF WRITING CUSTOM CODE to suit these requirements?",
    answer: ["Create an AWS Config rule that is invoked when CloudTrail configuration changes. Apply the AWS-ConfigureCloudTrailLogging automatic remediation action."],
    options: [
      "Add the AWS account to AWS Organizations. Enable CloudTrail in the management account.",
      "Create an AWS Config rule that is invoked when CloudTrail configuration changes. Apply the AWS-ConfigureCloudTrailLogging automatic remediation action.",
      "Create an AWS Config rule that is invoked when CloudTrail configuration changes. Configure the rule to invoke an AWS Lambda function to enable CloudTrail.",
      "Create an Amazon EventBridge (Amazon CloudWatch Event) hourly rule with a schedule pattern to run an AWS Systems Manager Automation document to enable CloudTrail."
    ]
  },
    {
    numb: 2,
    question: "A business utilizes Amazon Route 53 to administer the domain example.com's public DNS records. To distribute static assets for a new corporate website, the firm launches an Amazon CloudFront distribution. The firm want to build a subdomain called \"static\" and wishes to redirect traffic to the CloudFront distribution through the subdomain."
        + "How should a SysOps administrator add a new record to Route 53 for the subdomain?",
    answer: ["Create an A record. Enter static.example.com as the record name. Enter the CloudFront distribution's domain name as an alias target."],
    options: [
      "Create a CNAME record. Enter static.cloudfront.net as the record name. Enter the CloudFront distribution's public IP address as the value.",
      "Create a CNAME record. Enter static.example.com as the record name. Enter the CloudFront distribution's private IP address as the value.",
      "Create an A record. Enter static.cloudfront.net as the record name. Enter the CloudFront distribution's ID as an alias target.",
      "Create an A record. Enter static.example.com as the record name. Enter the CloudFront distribution's domain name as an alias target."
    ]
  },
    {
    numb: 3,
    question: "Three Amazon EC2 instances are used to host a web application behind an Application Load Balancer (ALB). The organization sees that during random moments of heightened traffic, the application's performance degrades. A SysOps administrator is responsible for scaling the program to accommodate the additional load."
        + "Which solution satisfies these criteria?",
    answer: ["Deploy the application to an Auto Scaling group of EC2 instances with a target tracking scaling policy. Attach the ALB to the Auto Scaling group."],
    options: [
      "Create an Amazon CloudWatch alarm to monitor application latency and increase the size of each EC2 instance if the desired threshold is reached.",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor application latency and add an EC2 instance to the ALB if the desired threshold is reached.",
      "Deploy the application to an Auto Scaling group of EC2 instances with a target tracking scaling policy. Attach the ALB to the Auto Scaling group.",
      "Deploy the application to an Auto Scaling group of EC2 instances with a scheduled scaling policy. Attach the ALB to the Auto Scaling group."
    ]
  },
    {
    numb: 4,
    question: "A corporation automates the setup of virtual machines (VMs) in its data center by using multiple huge Chef recipes. A SysOps administrator is transferring this workload to AWS's Amazon EC2 Instances and must execute the current Chef recipes."
        + "Which approach will be the most cost-effective in meeting these requirements?",
    answer: ["Set up AWS OpsWorks for Chef Automate. Migrate the existing recipes. Modify the EC2 instance user data to connect to Chef."],
    options: [
      "Create a Chef server that includes EC2 instances. Migrate the existing recipes. Modify the EC2 instance user data to connect to Chef.",
      "Set up AWS OpsWorks for Chef Automate. Migrate the existing recipes. Modify the EC2 instance user data to connect to Chef.",
      "Upload the existing recipes to Amazon S3. Run the recipes by using AWS Systems Manager State Manager.",
      "Upload the existing recipes to the user data section during the creation of the EC2 instances."
    ]
  },
    {
    numb: 5,
    question: "A major organization is use AWS Organizations to manage its several AWS accounts. All users should have read-only access to a certain Amazon S3 bucket under a central account, per corporate policy. The data in the S3 buckets should not be accessible to anybody outside the corporation. Permissions must be configured and a bucket policy added to the S3 bucket by a SysOps administrator."
        + "Which parameters should be supplied in order to execute this task in the MOST EFFECTIVE way possible?",
    answer: ["Specify ???? as the principal and PrincipalOrgId as a condition."],
    options: [
      "Specify ???? as the principal and PrincipalOrgId as a condition.",
      "Specify all account numbers as the principal.",
      "Specify PrincipalOrgId as the principal.",
      "Specify the organization's master account as the principal."
    ]
  },
    {
    numb: 6,
    question: "On its website, a business is offering a flash sale. The website is hosted on Amazon EC2 instances with burstable performance that are part of an Auto Scaling group. When the CPU use exceeds 70%, the Auto Scaling group is set to deploy instances."
    + "Users complain poor load speeds and error warnings for denied connections a few hours into the auction. A SysOps administrator is reviewing Amazon CloudWatch analytics and observes that CPU usage across the whole fleet of instances is at 20%."
    + "The SysOps administrator must restore functionality to the website without modifying the network architecture."
    + "Which solution will satisfy these criteria?",
    answer: ["Activate unlimited mode for the instances in the Auto Scaling group."],
    options: [
      "Activate unlimited mode for the instances in the Auto Scaling group.",
      "Implement an Amazon CloudFront distribution to offload the traffic from the Auto Scaling group.",
      "Move the website to a different AWS Region that is closer to the users.",
      "Reduce the desired size of the Auto Scaling group to artificially increase CPU average utilization."
    ]
  },
  {
    numb: 7,
    question: "In the AWS Cloud, a business maintains an online shopping platform. HTTPS security is provided by the gateway via the use of a TLS certificate on an Elastic Load Balancer (ELB)."
    + "Recently, the site had an outage due to the expiration of the TLS certificate. To prevent this problem in the future, a SysOps administrator must implement a system that automatically renews certificates."
    + "What is the MOST OPTIMAL option that satisfies these requirements?",
    answer: ["Request a public certificate by using AWS Certificate Manager (ACM). Associate the certificate from ACM with the ELB. ACM will automatically manage the renewal of the certificate."],
    options: [
      "Request a public certificate by using AWS Certificate Manager (ACM). Associate the certificate from ACM with the ELB. Write a scheduled AWS Lambda function to renew the certificate every 18 months.",
      "Request a public certificate by using AWS Certificate Manager (ACM). Associate the certificate from ACM with the ELB. ACM will automatically manage the renewal of the certificate.",
      "Register a certificate with a third-party certificate authority (CA). Import this certificate into AWS Certificate Manager (ACM). Associate the certificate from ACM with the ELB. ACM will automatically manage the renewal of the certificate.",
      "Register a certificate with a third-party certificate authority (CA). Configure the ELB to import the certificate directly from the CA. Set the certificate refresh cycle on the ELB to refresh when the certificate is within 3 months of the expiration date."
    ]
  },
  {
    numb: 8,
    question: "A SysOps administrator discovers that Amazon EC2 Auto Scaling group is scaling up. Amazon CloudWatch detects a rise in the linked Application Load Balancer's RequestCount statistic. The administrator want to know the originating IP addresses of the requests."
    + "Where is this information accessible to the administrator?",
    answer: ["AWS CloudTrail logs"],
    options: [
      "Auto Scaling logs",
      "AWS CloudTrail logs",
      "EC2 instance logs",
      "Elastic Load Balancer access logs"
    ]
  },
  {
    numb: 9,
    question: "On four Amazon EC2 instances in a default VPC, a gaming application is installed. The SysOps administrator has seen a steady increase in response time as data is moved across the four instances. The administrator has no means of altering the application's code."
    + " The MOST EFFECTIVE method of reducing latency is to restart the EC2 instances in the following order:",
    answer: ["a placement group."],
    options: [
      "a dedicated VPC.",
      "a single subnet inside the VPC.",
      "a placement group.",
      "a single Availability Zone."
    ]
  },
  {
    numb: 10,
    question: "A business is in the process of transferring its production file server to AWS. If an Availability Zone becomes inaccessible or when system maintenance is conducted, all data stored on the file server must remain accessible. The file server must be accessible to users through the SMB protocol. Additionally, users must be able to manage file permissions using Windows ACLs."
    + " Which solution will satisfy these criteria?",
    answer: ["Create an Amazon FSx for Windows File Server Multi-AZ file system."],
    options: [
      "Create a single AWS Storage Gateway file gateway.",
      "Create an Amazon FSx for Windows File Server Multi-AZ file system.",
      "Deploy two AWS Storage Gateway file gateways across two Availability Zones. Configure an Application Load Balancer in front of the file gateways.",
      "Deploy two Amazon FSx for Windows File Server Single-AZ 2 file systems. Configure Microsoft Distributed File System Replication (DFSR)."
    ]
  },
  {
    numb: 11,
    question: "A business shares files across many Linux Amazon EC2 instances using an Amazon Elastic File System (Amazon EFS) file system. For 15 minutes or more, a SysOps administrator notes that the file system's PercentIOLimit statistic is continually set to 100%. Additionally, the SysOps administrator observes that the program responsible for reading and writing to that file system is performing badly. While accessing the file system, the program demands a high throughput and IOPS."
    + " What should the SysOps administrator do to correct the PercentIOLimit metric's persistently high value?",
    answer: ["Create a new EFS file system that uses Max I/O performance mode. Use AWS DataSync to migrate data to the new EFS file system."],
    options: [
      "Create a new EFS file system that uses Max I/O performance mode. Use AWS DataSync to migrate data to the new EFS file system.",
      "Create an EFS lifecycle policy to transition future files to the Infrequent Access (IA) storage class to improve performance. Use AWS DataSync to migrate existing data to IA storage.",
      "Modify the existing EFS file system and activate Max I/O performance mode.",
      "Modify the existing EFS file system and activate Provisioned Throughput mode."
    ]
  },
  {
    numb: 12,
    question: "On Amazon EC2 instances, a business hosts an internal application. All application data and requests are routed between the on-premises network and AWS through an AWS Site-to-Site VPN connection. The business must continuously monitor the application for updates that enable network access from outside the corporate network. Any update that exposes the program to the outside world must be immediately prohibited."
    + " Which option satisfies these objectives the MOST EFFECTIVELY in terms of operational efficiency?",
    answer: ["Configure AWS Config and a custom rule to monitor whether a security group allows inbound requests from noncorporate CIDR ranges. Create an AWS Systems Manager Automation document to remove any noncorporate CIDR ranges from the application security groups."],
    options: [
      "Create an AWS Lambda function that updates security groups that are associated with the elastic network interface to remove inbound rules with noncorporate CIDR ranges. Turn on VPC Flow Logs, and send the logs to Amazon CloudWatch Logs. Create an Amazon CloudWatch alarm that matches traffic from noncorporate CIDR ranges, and publish a message to an Amazon Simple Notification Service (Amazon SNS) topic with the Lambda function as a target.",
      "Create a scheduled Amazon EventBridge (Amazon CloudWatch Events) rule that targets an AWS Systems Manager Automation document to check for public IP addresses on the EC2 instances. If public IP addresses are found on the EC2 instances, initiate another Systems Manager Automation document to terminate the instances.",
      "Configure AWS Config and a custom rule to monitor whether a security group allows inbound requests from noncorporate CIDR ranges. Create an AWS Systems Manager Automation document to remove any noncorporate CIDR ranges from the application security groups.",
      "Configure AWS Config and the managed rule for monitoring public IP associations with the EC2 instances by tag. Tag the EC2 instances with an identifier. Create an AWS Systems Manager Automation document to remove the public IP association from the EC2 instances."
    ]
  },
  {
    numb: 13,
    question: "Multiple developers work on the same product at a software development business. Each developer must have his or her own development environment, which must be similar. Each development environment is comprised of one or more Amazon EC2 instances and one or more Amazon RDS database instances. To keep expenses down, development environments should be generated only when required and decommissioned each night."
    + " What is the MOST OPTIMAL option that satisfies these requirements?",
    answer: ["Provide developers with access to the same AWS CloudFormation template so that they can provision their development environment when necessary. Schedule a nightly Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to delete the AWS CloudFormation stacks."],
    options: [
      "Provide developers with access to the same AWS CloudFormation template so that they can provision their development environment when necessary. Schedule a nightly cron job on each development instance to stop all running processes to reduce CPU utilization to nearly zero.",
      "Provide developers with access to the same AWS CloudFormation template so that they can provision their development environment when necessary. Schedule a nightly Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to delete the AWS CloudFormation stacks.",
      "Provide developers with CLI commands so that they can provision their own development environment when necessary. Schedule a nightly Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function to terminate all EC2 instances and the DB instance.",
      "Provide developers with CLI commands so that they can provision their own development environment when necessary. Schedule a nightly Amazon EventBridge (Amazon CloudWatch Events) rule to cause AWS CloudFormation to delete all of the development environment resources."
    ]
  },
  {
    numb: 14,
    question: "A SysOps administrator is in the process of launching a test website on Amazon EC2 instances. The application needs both inbound and outbound internet access."
    + " Which sequence of procedures is necessary to connect the EC2 instances to the internet? (Select two.)",
    answer: ["Add an entry to the route table for the subnet that points to an internet gateway.","Create an internet gateway and attach it to a VPC."],
    options: [
      "Add a NAT gateway to a public subnet.",
      "Attach a private address to the elastic network interface on the EC2 instance.",
      "Attach an Elastic IP address to the internet gateway.",
      "Add an entry to the route table for the subnet that points to an internet gateway.",
      "Create an internet gateway and attach it to a VPC."
    ]
  },
  {
    numb: 15,
    question: "A business want to keep track of its Amazon EC2 and Amazon RDS costs inside AWS. The business chooses to increase the severity of its labeling. Demand for resources in its Amazon Web Services (AWS) accounts. A SysOps administrator must identify any resources that are not compliant."
    + " What is the MOST OPTIMAL option that satisfies these requirements?",
    answer: ["Create a rule in AWS Config with the required-tags managed rule to evaluate all resources for the specified tags."],
    options: [
      "Create a rule in Amazon EventBridge (Amazon CloudWatch Events) that invokes a custom AWS Lambda function that will evaluate all created or updated resources for the specified tags.",
      "Create a rule in AWS Config that invokes a custom AWS Lambda function that will evaluate all resources for the specified tags.",
      "Create a rule in AWS Config with the required-tags managed rule to evaluate all resources for the specified tags.",
      "Create a rule in Amazon EventBridge (Amazon CloudWatch Events) with a managed rule to evaluate all created or updated resources for the specified tags."
    ]
  },
  {
    numb: 16,
    question: "An organization maintains a number of apps for the benefit of its clients. Each application is deployed using a standard AWS CloudFormation template that creates a new Virtual Private Cloud (VPC). All apps are hosted in the same Amazon Web Services (AWS) account and region. When attempting to install the same AWS CloudFormation stack, a SysOps administrator notices that it fails to deploy."
    + " What is most likely to be the issue?",
    answer: ["The account has reached the default limit for VPCs allowed."],
    options: [
      "The Amazon Machine image used is not available in that region.",
      "The AWS CloudFormation template needs to be updated to the latest version.",
      "The VPC configuration parameters have changed and must be updated in the template.",
      "The account has reached the default limit for VPCs allowed."
    ]
  },
  {
    numb: 17,
    question: "A business's website is hosted in the us-east-1 region. The business is now ready to launch its website in the eu-central-1 Region. Visitors from Europe should access the webpage hosted in eu-central-1. The remainder of the visitors reach the website hosted in us-east-1. The firm manages the website's DNS records using Amazon Route 53."
    + " Which routing policy should be applied to the Route 53 record established by a SysOps administrator to fulfill these requirements?",
    answer: ["Geolocation routing policy"],
    options: [
      "Geolocation routing policy",
      "Geoproximity routing policy",
      "Latency routing policy",
      "Multivalue answer routing policy"
    ]
  },
  {
    numb: 18,
    question: "A corporation hosts a stateful web application on Amazon EC2 instances that are part of an Auto Scaling group. The instances operate behind a single-targeted Application Load Balancer (ALB). In an Amazon CloudFront distribution, the ALB is specified as the origin. Users are claiming that they are being logged out of the online application at odd times."
    + " Which steps should a SysOps administrator do in combination to remedy this issue? (Select two.)",
    answer: ["Configure cookie forwarding in the CloudFront distribution cache behavior.","Enable sticky sessions on the ALB target group."],
    options: [
      "Change to the least outstanding requests algorithm on the ALB target group.",
      "Configure cookie forwarding in the CloudFront distribution cache behavior.",
      "Configure header forwarding in the CloudFront distribution cache behavior.",
      "Enable group-level stickiness on the ALB listener rule.",
      "Enable sticky sessions on the ALB target group."
    ]
  },
  {
    numb: 19,
    question: "A business hosts a website on Amazon EC2 instances that are routed via an Application Load Balancer (ALB). The organization established an Amazon CloudFront distribution and pointed the origin to the ALB. To route all traffic via the CloudFront distribution, the organization built an Amazon Route 53 CNAME record. As an unexpected consequence, mobile visitors are now offered the website's desktop version."
    + " What is the appropriate course of action for a SysOps administrator to follow in order to remedy this issue?",
    answer: ["Configure the CloudFront distribution origin settings. Add a User-Agent header to the list of origin custom headers."],
    options: [
      "Configure the CloudFront distribution behavior to forward the User-Agent header.",
      "Configure the CloudFront distribution origin settings. Add a User-Agent header to the list of origin custom headers.",
      "Enable IPv6 on the ALB. Update the CloudFront distribution origin settings to use the dualstack endpoint.",
      "Enable IPv6 on the CloudFront distribution. Update the Route 53 record to use the dualstack endpoint."
    ]
  },
  {
    numb: 20,
    question: "A data storage firm offers a service that enables customers to upload and download files on a need-to-know basis. The files are kept in Amazon S3 Standard and must be instantly accessible for a period of one year. Users commonly view files within the first 30 days after they are saved. After 30 days, users seldom view files. The company's SysOps administrator must build a solution that preserves object availability while minimizing costs using S3 Lifecycle rules."
    + " Which solution will satisfy these criteria?",
    answer: ["Move objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days."],
    options: [
      "Move objects to S3 Glacier after 30 days.",
      "Move objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.",
      "Move objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.",
      "Move objects to S3 Standard-Infrequent Access (S3 Standard-IA) immediately."
    ]
  },
  {
    numb: 21,
    question: "A business analyzes sales and consumer use data using Amazon Elasticsearch Service (Amazon ES). Travel is being made by members of the company's globally distributed sales staff. They must sign in to Kibana using their corporate credentials saved in Active Directory. The organization has used Active Directory Federation Services (AD FS) to provide cloud service authentication."
    + " Which solution will satisfy these criteria?",
    answer: ["Deploy an Amazon Cognito user pool. Configure Active Directory as an external identity provider for the user pool. Enable Amazon Cognito authentication for Kibana on Amazon ES. "],
    options: [
      "Configure Active Directory as an authentication provider in Amazon ES. Add the Active Directory server's domain name to Amazon ES. Configure Kibana to use Amazon ES authentication.",
      "Deploy an Amazon Cognito user pool. Configure Active Directory as an external identity provider for the user pool. Enable Amazon Cognito authentication for Kibana on Amazon ES.",
      "Enable Active Directory user authentication in Kibana. Create an IP-based custom domain access policy in Amazon ES that includes the Active Directory server's IP address.",
      "Establish a trust relationship with Kibana on the Active Directory server. Enable Active Directory user authentication in Kibana. Add the Active Directory server's IP address to Kibana."
    ]
  },
  {
    numb: 22,
    question: "A business requests assistance from a SysOps administrator in ensuring that AWS CloudTrail files are not altered after they are produced. Currently, the organization restricts access to select paths through AWS Identity and Access Management (IAM). The security staff of the organization must be able to track the integrity of each file."
    + " What is the MOST OPTIMAL option that satisfies these requirements?",
    answer: ["Enable the CloudTrail file integrity feature on the trail. The security team can use the digest file that is created by CloudTrail to verify the integrity of the delivered files."],
    options: [
      "Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function when a new file is delivered. Configure the Lambda function to compute an MD5 hash check on the file and store the result in an Amazon DynamoDB table. The security team can use the values that are stored in DynamoDB to verify the integrity of the delivered files.",
      "Create an AWS Lambda function that is invoked each time a new file is delivered to the CloudTrail bucket. Configure the Lambda function to compute an MD5 hash check on the file and store the result as a tag in an Amazon 53 object. The security team can use the information in the tag to verify the integrity of the delivered files.",
      "Enable the CloudTrail file integrity feature on an Amazon S3 bucket. Create an IAM policy that grants the security team access to the file integrity logs that are stored in the S3 bucket.",
      "Enable the CloudTrail file integrity feature on the trail. The security team can use the digest file that is created by CloudTrail to verify the integrity of the delivered files."
    ]
  },
  {
    numb: 23,
    question: "A SysOps administrator is automating the process of recovering an Amazon EC2 instance after a hardware breakdown. The restored instance must have the same private IP address as the original instance, as well as the same Elastic IP address. When the recovery process is launched, the SysOps team must be notified through email."
    + " Which solution will satisfy these criteria?",
    answer: ["Create an Amazon CloudWatch alarm for the EC2 instance, and specify the StatusCheckFailed_System metric. Add an EC2 action to the alarm to recover the instance. Add an alarm notification to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the SysOps team email address to the SNS topic."],
    options: [
      "Create an Amazon CloudWatch alarm for the EC2 instance, and specify the StatusCheckFailed_Instance metric. Add an EC2 action to the alarm to recover the instance. Add an alarm notification to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the SysOps team email address to the SNS topic.",
      "Create an Amazon CloudWatch alarm for the EC2 instance, and specify the StatusCheckFailed_System metric. Add an EC2 action to the alarm to recover the instance. Add an alarm notification to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the SysOps team email address to the SNS topic.",
      "Create an Auto Scaling group across three different subnets in the same Availability Zone with a minimum, maximum, and desired size of 1. Configure the Auto Scaling group to use a launch template that specifies the private IP address and the Elastic IP address. Add an activity notification for the Auto Scaling group to send an email message to the SysOps team through Amazon Simple Email Service (Amazon SES).",
      "Create an Auto Scaling group across three Availability Zones with a minimum, maximum, and desired size of 1. Configure the Auto Scaling group to use a launch template that specifies the private IP address and the Elastic IP address. Add an activity notification for the Auto Scaling group to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the SysOps team email address to the SNS topic."
    ]
  },
  {
    numb: 24,
    question: "A SysOps administrator has developed a virtual private cloud (VPC) that incorporates both a public and private subnet. Amazon EC2 instances deployed in the private subnet are unable to connect to the internet. All subnets in the VPC have the default network ACL enabled, and all security groups allow all outgoing traffic."
    + " Which option will enable internet connectivity to the EC2 instances in the private subnet?",
    answer: ["Create a NAT gateway in the public subnet. Create a route from the private subnet to the NAT gateway."],
    options: [
      "Create a NAT gateway in the public subnet. Create a route from the private subnet to the NAT gateway.",
      "Create a NAT gateway in the public subnet. Create a route from the public subnet to the NAT gateway.",
      "Create a NAT gateway in the private subnet. Create a route from the public subnet to the NAT gateway.",
      "Create a NAT gateway in the private subnet. Create a route from the private subnet to the NAT gateway."
    ]
  },
  {
    numb: 25,
    question: "A SysOps administrator discovers that Amazon EC2 Auto Scaling group is scaling up. Amazon CloudWatch detects a rise in the linked Application Load Balancer's RequestCount statistic. The administrator want to know the originating IP addresses of the requests."
    + "Where is this information accessible to the administrator?",
    answer: ["AWS CloudTrail logs"],
    options: [
      "Auto Scaling logs",
      "AWS CloudTrail logs",
      "EC2 instance logs",
      "Elastic Load Balancer access logs"
    ]
  },
  {
    numb: 26,
    question: "A SysOps administrator discovers that Amazon EC2 Auto Scaling group is scaling up. Amazon CloudWatch detects a rise in the linked Application Load Balancer's RequestCount statistic. The administrator want to know the originating IP addresses of the requests."
    + "Where is this information accessible to the administrator?",
    answer: ["AWS CloudTrail logs"],
    options: [
      "Auto Scaling logs",
      "AWS CloudTrail logs",
      "EC2 instance logs",
      "Elastic Load Balancer access logs"
    ]
  },
  {
    numb: 27,
    question: "A SysOps administrator discovers that Amazon EC2 Auto Scaling group is scaling up. Amazon CloudWatch detects a rise in the linked Application Load Balancer's RequestCount statistic. The administrator want to know the originating IP addresses of the requests."
    + "Where is this information accessible to the administrator?",
    answer: ["AWS CloudTrail logs"],
    options: [
      "Auto Scaling logs",
      "AWS CloudTrail logs",
      "EC2 instance logs",
      "Elastic Load Balancer access logs"
    ]
  },
  {
    numb: 28,
    question: "A SysOps administrator discovers that Amazon EC2 Auto Scaling group is scaling up. Amazon CloudWatch detects a rise in the linked Application Load Balancer's RequestCount statistic. The administrator want to know the originating IP addresses of the requests."
    + "Where is this information accessible to the administrator?",
    answer: ["AWS CloudTrail logs"],
    options: [
      "Auto Scaling logs",
      "AWS CloudTrail logs",
      "EC2 instance logs",
      "Elastic Load Balancer access logs"
    ]
  },
  {
    numb: 29,
    question: "A SysOps administrator discovers that Amazon EC2 Auto Scaling group is scaling up. Amazon CloudWatch detects a rise in the linked Application Load Balancer's RequestCount statistic. The administrator want to know the originating IP addresses of the requests."
    + "Where is this information accessible to the administrator?",
    answer: ["AWS CloudTrail logs"],
    options: [
      "Auto Scaling logs",
      "AWS CloudTrail logs",
      "EC2 instance logs",
      "Elastic Load Balancer access logs"
    ]
  },
  {
    numb: 30,
    question: "A SysOps administrator discovers that Amazon EC2 Auto Scaling group is scaling up. Amazon CloudWatch detects a rise in the linked Application Load Balancer's RequestCount statistic. The administrator want to know the originating IP addresses of the requests."
    + "Where is this information accessible to the administrator?",
    answer: ["AWS CloudTrail logs"],
    options: [
      "Auto Scaling logs",
      "AWS CloudTrail logs",
      "EC2 instance logs",
      "Elastic Load Balancer access logs"
    ]
  },
  





  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: ["Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];