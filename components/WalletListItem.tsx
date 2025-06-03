import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { WalletType } from "@/types";
import { Router } from "expo-router";
import { verticalScale } from "@/utils/styling";
import { colors, radius, spacingX } from "@/constants/theme";
import { Image } from "expo-image";
import Typo from "./Typo";
import * as Icons from "phosphor-react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const WalletListItem = ({
  item,
  index,
  router,
}: {
  item: WalletType;
  index: number;
  router: Router;
}) => {
  const openWallet = () => {
    router.push({
      pathname: "/(modals)/walletModal",
      params: {
        id: item?.id,
        name: item?.name,
        image: item?.image,
      },
    });
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 50)
        .springify()
        .damping(13)}
    >
      <TouchableOpacity style={styles.itemContainer} onPress={openWallet}>
        <Image
          source={item.image}
          contentFit="cover"
          transition={100}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Typo size={16}>{item.name}</Typo>
          <Typo size={14} color={colors.neutral400}>
            ${item.amount}
          </Typo>
        </View>

        <Icons.CaretRight
          size={verticalScale(20)}
          weight="bold"
          color={colors.white}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default WalletListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    backgroundColor: "transparent",
    borderBottomColor: colors.neutral800,
  },
  image: {
    height: verticalScale(45),
    width: verticalScale(45),
    borderRadius: radius._10,
    overflow: "hidden",
    marginRight: spacingX._15,
    borderWidth: 1,
    borderColor: colors.neutral600,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
