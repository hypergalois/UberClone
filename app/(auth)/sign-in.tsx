import { Text, View, ScrollView, Image } from "react-native";
import { useState } from "react";

import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";

import { icons, images } from "@/constants";
import { Link } from "expo-router";

export default function SignUp() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onSignInPress = async () => {};

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image
                        source={images.signUpCar}
                        className="z-0 w-full h-[250px]"
                    />
                    <Text className="absolute bottom-5 left-5 text-3xl font-JakartaSemiBold text-black">
                        Welcome back 👋
                    </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label={"Email"}
                        placeholder="Enter email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(email) => setForm({ ...form, email })}
                    />

                    <InputField
                        label={"Password"}
                        placeholder="Enter password"
                        icon={icons.lock}
                        value={form.password}
                        secureTextEntry={true}
                        onChangeText={(password) =>
                            setForm({ ...form, password })
                        }
                    />

                    <CustomButton
                        title="Sign In"
                        onPress={onSignInPress}
                        className="mt-6"
                    />

                    <OAuth />

                    <Link
                        href="/sign-up"
                        className="text-lg text-center text-general-200 mt-10"
                    >
                        <Text>Don't have an account?</Text>{" "}
                        <Text className="text-primary-500">Sign Up</Text>
                    </Link>
                </View>

                {/* Verification modal */}
            </View>
        </ScrollView>
    );
}
