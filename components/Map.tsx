import { Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function Map() {
    const region = {
        latitude: 56.5244,
        longitude: 33.3792,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            className="w-full h-full rounded-2xl"
            initialRegion={region}
            tintColor="black"
            mapType="mutedStandard"
            showsPointsOfInterest={false}
            showsUserLocation={true}
            userInterfaceStyle="light"
        ></MapView>
    );
}
