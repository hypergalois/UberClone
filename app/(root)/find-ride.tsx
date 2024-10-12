import { useLocationStore } from "@/store";
import { Text, View } from "react-native";

export default function FindRide() {
    const {
        userAddress,
        destinationAddress,
        setUserLocation,
        setDestinationLocation,
    } = useLocationStore();

    return (
        <View>
            <Text className="text-2xl">You are here: {userAddress}</Text>
            <Text className="text-2xl">
                You are going to: {destinationAddress}
            </Text>
        </View>
    );
}
