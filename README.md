# Shopify Theme Development Setup

This guide will help you set up and run a Shopify theme on your account locally, using a GitHub repository.

## Вимоги
- **Shopify Store**
- **Shopify CLI**
- **Git**
- **Node.js**

Step 1: Installing Shopify CLI
First, you need to install Shopify CLI.
Use the official documentation for your operating system:
After installation, check if everything is working:

        shopify version

Step 2: Cloning the Repository
Clone the theme repository from GitHub:

    git clone https://github.com/victoriasokolvak/shopify-test-task.git
    cd shopify-test-task

Step 3: Shopify Authorization
To connect to your Shopify account, you need to log in using Shopify CLI:

    shopify login --store your-store-name.myshopify.com
  Replace your-store-name with the domain of your Shopify store.

Step 4: Connecting the Theme to Your Store
After logging in, connect the theme to your Shopify store:

    shopify theme push
  This command will sync your local theme with your Shopify store.

Step 5: Running the Local Environment
To start a local server for working with the theme, use the command:

    shopify theme dev

Additional Steps:
You may need to install additional packages:

    npm install
