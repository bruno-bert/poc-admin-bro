## POC using admin bro to medical use case

### Requirements

[] test child list
[] strong password
[] create report in pdf




### How to Deploy

1. execute the changes 
2. git push to server 
3. merge to master branch
4. connect to server and perform git pull
5. ## this step is required only in first deploy ## 
rename .env-example to .env with command : ```bash mv .env-example file to .env ``` 
change the .env file to reflect the environment variables required with command: ```bash nano .env``` (ctrl+O to save, ctrl + X to exit)
backup the .env file wit command ```bash cp .env ~/apps/.env-poc-admin-bro ``` 