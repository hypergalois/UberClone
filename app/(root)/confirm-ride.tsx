import CustomButton from "@/components/CustomButton";
import DriverCard from "@/components/DriverCard";
import RideLayout from "@/components/RideLayout";
import { useDriverStore } from "@/store";
import { router } from "expo-router";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function ConfirmRide() {
    const { drivers, setSelectedDriver, selectedDriver } = useDriverStore();

    return (
        <RideLayout title="Choose a Driver" snapPoints={["65%"]}>
            <View className="flex-1 justify-center">
                <FlatList
                    data={drivers}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <DriverCard
                            selected={selectedDriver!}
                            setSelected={() => setSelectedDriver(item.id!)}
                            item={item}
                        />
                    )}
                    ListFooterComponent={() => (
                        <View className="mx-5 mt-10">
                            <CustomButton
                                title="Select Ride"
                                onPress={() => router.push("/(root)/book-ride")}
                            />
                        </View>
                    )}
                />
            </View>
        </RideLayout>
    );
}
