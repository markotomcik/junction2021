# Huawei Mobile Services starter project for React Native
Welcome to Huawei's challenge at [Junction 2021](https://www.junction2021.com/challenges/huawei)!

You have a bunch of fresh ideas and you aspire to make them possible with the help of the [Huawei Mobile Services](https://developer.huawei.com/consumer/en/hms) (HMS). We feel your enthusiasm - that's why we prepared this React Native starter project that will allow you to start coding *immediately* and avoid time consuming configuration steps. The project is designed for Android devices only.



### I'm in!

1. fork/clone this project
2. visit the workshop Discord channel [Junction 21 Hackathon Huawei](https://discord.gg/8ZSdWKmzDS) 
3. look for the file with secrets ([direct link ](https://discord.com/channels/907280815640150066/910820845860053022))
4. unzip the file into the project's *android* directory
5. start coding!



### What just happened? Am I really ready to go?

Yes!! The starter project is a React Native skeleton app that:

- has the main HMS Kits added as dependencies 
- has all relevant permissions added to the Android manifest
- connects to a shared account on [App Gallery](https://consumer.huawei.com/en/mobileservices/appgallery/) which needed by the majority of the HMS Kits
- when started, you can tap on "Check HMS status" to do a check if everything is properly configured

The file with secrets is the link between the starter project and the shared account. It contains:

- the `agconnect-services.json` configuration file
- the signing configuration needed to authenticate this app to use HMS services

### Start coding
1. Add  SDK location in local.properties if needed
- Go to your Project -> Android
- Open the file local.properties
- Paste your Android SDK path depending on the operating system:
+ Windows

sdk.dir = C:/Users/USERNAME/AppData/Local/Android/sdk

+ Linux or MacOS

sdk.dir = /home/USERNAME/Android/sdk

Replace USERNAME with your user name

2. It is highly recommmended to use yarn to install package instead of npm:
    ```
    yarn 
    ```
3. then run the app

    ```
    npx react-native run-android
    ```

### But I don't have a Huawei HMS test device ...

There are solutions.

1. If you're participating on-site, ask for a test device at the Huawei booth
2. Download and temporary install HMS Core on your own Android device from [here](https://appgallery.cloud.huawei.com/appdl/C10132067)
3. [Cloud Debugging](https://developer.huawei.com/consumer/en/doc/development/Tools-Guides/CloudDebugging-introduction) : this requires you to actually own/create a Huawei Developer account, but once that's done, you can just download the [HMS Toolkit Android Studio plugin](https://developer.huawei.com/consumer/en/doc/development/Tools-Guides/installation-0000001050145206) and access physical devices in the cloud



### Starter projects for other platforms

- for Native Android: https://github.com/Huawei-Nordic/Junction2021_native

- for Flutter: https://github.com/Huawei-Nordic/junction2021_flutterx

- for Unity: https://github.com/DimitriUK/Junction-21-Huawei-Example

  

More HMS code samples:

- https://github.com/HMS-Core 
- https://github.com/Explore-In-HMS/HmsSandbox

Add more Huawei React Native plugins:
- https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Guides/rn-intro-0000001050975015


**Happy hacking!**
