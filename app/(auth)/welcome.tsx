import { Text, TouchableOpacity, View } from "react-native";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";

import { onboarding } from "../../constants/index";

export default function Welcome() {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            <TouchableOpacity
                className="flex justify-end w-full items-end p-5"
                onPress={() => {
                    router.replace("/(auth)/sign-up");
                }}
            >
                <Text className="text-black text-md font-JakartaBold">
                    Skip
                </Text>
            </TouchableOpacity>

            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
                activeDot={
                    <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF]" />
                }
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map((item) => (
                    <View key={item.id}>
                        <Text className="text-black text-3xl font-JakartaBold">
                            {item.title}
                        </Text>
                        <Text className="text-black text-lg font-JakartaRegular">
                            {item.description}
                        </Text>
                    </View>
                ))}
            </Swiper>
        </SafeAreaView>
    );
}
