import { useLocationStore } from "@/store";
import { Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { calculateRegion } from "@/lib/map";

export default function Map() {
    const {
        userLongitude,
        userLatitude,
        destinationLongitude,
        destinationLatitude,
    } = useLocationStore();

    console.log(
        userLongitude,
        userLatitude,
        destinationLongitude,
        destinationLatitude
    );

    const region = calculateRegion({
        userLongitude,
        userLatitude,
        destinationLongitude,
        destinationLatitude,
    });

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            className="w-full h-full rounded-2xl"
            tintColor="black"
            mapType="mutedStandard"
            showsPointsOfInterest={false}
            initialRegion={region}
            showsUserLocation={true}
            userInterfaceStyle="light"
        ></MapView>
    );
}
