import { View, Text } from "react-native";
import React from "react";
import { Ride } from "@/types/type";

export default function RideCard({ ride }: { ride: Ride }) {
    return (
        <View>
            <Text>{ride.driver.first_name}</Text>
        </View>
    );
}
