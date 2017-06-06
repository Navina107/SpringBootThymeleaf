### d2-auth-api

Clone the d2-auth-api repository using git:
```
git clone https://github.com/Coats/d2-auth-api.git <your-project-name>
cd <your-project-name>
```

If you just want to start a new project without the d2-auth-api commit history then you can do:

```
git clone --depth=1 https://github.com/Coats/d2-auth-api.git <your-project-name>
```
The depth=1 tells git to only pull down one commit worth of historical data.

###Initialize new project 

Prepare project content 
1. Update setting.gradle ```rootProject.name``` to your new project name
2. Refactor/move ```CoatsApplication``` and  ```CoatsApplicationApplicationTests``` to a new package matching your project base package 
3. Rename docker image in dockerRun.sh to match the image name of your project
4. Rewrite this Readme to contain a short description of the new project
5. Review 

###Initialize new repository 
Disconnect from the seed repository and commit the initialized seed project and push.
```
rm -rf .git
git init
git add build.gradle dockerRun.sh gradlew settings.gradle Dockerfile gradle gradlew.bat src .gitignore 
git commit -m "First commit strarting from spring boot seed"
git remote add origin https://github.com/Coats/<your-new-repo>.git
git push -u origin master
```

###Notes
The seed project uses spring boot 1.5.3.RELEASE which is not compatible with auth0 spring integration library.
If the auth0 library is required the lower spring boot to version 1.4.6.RELEASE

Gradle is used as build tool via gradle-wrapper 