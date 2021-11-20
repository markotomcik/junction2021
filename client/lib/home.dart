import 'package:flutter/material.dart';
import 'package:huawei_hmsavailability/huawei_hmsavailability.dart';
import 'package:huawei_push/huawei_push_library.dart';
import 'package:huawei_map/map.dart';

class MyHomePage extends StatelessWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        /**/
        appBar: AppBar(
            backgroundColor: Colors.red,
            title: Text(title),
            actions: <Widget>[
              FutureBuilder<void>(
                  future: _checkHMS(),
                  builder:
                      (BuildContext context, AsyncSnapshot<void> snapshot) {
                    final String message = _getMessageFromSnapshot(snapshot);
                    return Text(message);
                  })
            ]),
        body: Center(
          child: Container(
            child: HuaweiMap(
              initialCameraPosition: CameraPosition(
                target: const LatLng(49.054861, 20.299854),
                zoom: 12,
              ),
              mapType: MapType.normal,
              zoomControlsEnabled: true,
            ),
          ),
        ),
        drawer: Drawer(
          // Add a ListView to the drawer. This ensures the user can scroll
          // through the options in the drawer if there isn't enough vertical
          // space to fit everything.
          child: ListView(
            // Important: Remove any padding from the ListView.
            padding: EdgeInsets.zero,
            children: [
              const DrawerHeader(
                decoration: BoxDecoration(
                  color: Colors.blue,
                ),
                child: Text('Drawer Header'),
              ),
              ListTile(
                title: const Text('Item 1'),
                onTap: () {
                  // Update the state of the app
                  // ...
                  // Then close the drawer
                  Navigator.pop(context);
                },
              ),
              ListTile(
                title: const Text('Item 2'),
                onTap: () {
                  // Update the state of the app
                  // ...
                  // Then close the drawer
                  Navigator.pop(context);
                },
              ),
            ],
          ),
        ));
  }

  Future<void> _checkHMS() async {
    await _testHmsCorePresence();
    await _testAccountByRequestingPushNotificationsToken();
  }

  Future<void> _testHmsCorePresence() async {
    final HmsApiAvailability hmsApiAvailability = new HmsApiAvailability();
    final hmsCoreStatus = await hmsApiAvailability.isHMSAvailable();
    if (hmsCoreStatus != 0) {
      final hmsCoreNotAvailableExplanation =
          await hmsApiAvailability.getErrorString(hmsCoreStatus);
      throw new Exception(hmsCoreNotAvailableExplanation);
    }
  }

  Future<void> _testAccountByRequestingPushNotificationsToken() async {
    await Push.getToken("HCM");
    final pushToken = await Push.getTokenStream.first;
    if (pushToken.isEmpty) {
      throw new Exception(
          'Push notifications token retrieved, but empty. Clear app data and try again.');
    }
  }

  String _getMessageFromSnapshot(AsyncSnapshot<void> snapshot) {
    switch (snapshot.connectionState) {
      case ConnectionState.active:
      case ConnectionState.waiting:
        return 'Checking HMS status ...';
      case ConnectionState.done:
        if (snapshot.hasError) {
          return 'Check HMS failed with ${snapshot.error.toString()}';
        } else {
          return 'All good. Start hacking!';
        }
      case ConnectionState.none:
        return 'Checking HMS disabled.';
    }
  }
}
