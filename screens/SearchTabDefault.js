import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  VirtualizedList,
  ScrollView,
} from "react-native";
import { BlurView } from "expo-blur";
import { FadeIn, FadeOut, SlideInDown } from "react-native-reanimated";
import React, { useState } from "react";
import { type } from "../settings/styles/Typography";
import { PrimaryColors } from "../settings/styles/Colors";
import { useData } from "../components/DataContext";
import SearchLocation from "../components/searchTab/SearchLocation";
import { useNavigation } from "@react-navigation/native";
import AllergySelect from "../components/searchTab/AllergySelect";
import DietSelect from "../components/searchTab/DietSelect";
import { spacing } from "../settings/styles/Spacing";
import BuddySelect from "../components/searchTab/BuddySelect";

export default function SearchTabDefault() {
  const navigation = useNavigation();
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);
  const [openCard, setOpenCard] = useState(9);

  const onClearAll = () => {
    setOpenCard(9);
  };

  const { selectedRestriction } = useData();

  const continueBtn = () => {
    setOpenCard((openCard) => {
      console.log("SearchTabDefault.js/continueBtn/prevCardNum  :", openCard);
      return openCard + 1;
    });
  };

  const { setCity } = useData();



  return (
    <BlurView intensity={70} style={styles.container} tint="light">
      <ScrollView>
        {/* who */}
        {/* who */}
        <View
          style={[
            openCard === 0 ? styles.cardFocus : styles.card,
            spacing.vert3x,
          ]}
        >
          {openCard != 0 && (
            <AnimatedTouchableOpacity
              onPress={() => setOpenCard(0)}
              style={styles.cardPreview}
              entering={FadeIn.duration(200)}
              exiting={FadeOut.duration(200)}
            >
              <Text style={styles.previewText}>Who</Text>
              <Text style={styles.previewDate}>Anyone</Text>
            </AnimatedTouchableOpacity>
          )}

          {openCard === 0 && (
            <>
              <Text style={styles.cardHeader}>Who</Text>
              {/* <Text style={styles.cardSub}>Im flexible</Text> */}
              <Animated.View>
                <BuddySelect />
              </Animated.View>
            </>
          )}
        </View>

        {/* what */}
        {/* what */}
        <View
          style={[
            openCard === 1 ? styles.cardFocus : styles.card,
            spacing.vert3x,
          ]}
        >
          {openCard != 1 && (
            <AnimatedTouchableOpacity
              onPress={() => setOpenCard(1)}
              style={styles.cardPreview}
              entering={FadeIn.duration(200)}
              exiting={FadeOut.duration(200)}
            >
              <Text style={styles.previewText}>What</Text>
              <Text style={styles.previewDate}>{selectedRestriction.length} restrictions</Text>
            </AnimatedTouchableOpacity>
          )}

          {openCard === 1 && (
            <>
              <Text style={styles.cardHeader}>What</Text>
              <Text style={styles.cardSub}>Select your allergies</Text>
              <Animated.View>
                <AllergySelect/>
                <DietSelect />
              </Animated.View>

            </>
          )}
        </View>

        {/* where */}
        {/* where */}
        <View
          style={[
            openCard === 2 ? styles.cardFocus : styles.card,
            spacing.vert8x,
          ]}
        >
          {openCard != 2 && (
            <AnimatedTouchableOpacity
              onPress={() => setOpenCard(2)}
              style={styles.cardPreview}
              entering={FadeIn.duration(200)}
              exiting={FadeOut.duration(200)}
            >
              <Text style={styles.previewText}>Where</Text>
              <Text style={styles.previewDate}>Anywhere</Text>
            </AnimatedTouchableOpacity>
          )}
          {openCard === 2 && (
            <>
              <Text style={styles.cardHeader}>Where</Text>
              <Text style={styles.cardSub}>
                Enter the area where you'd like to discover dining options
              </Text>
              <Animated.View>
                <SearchLocation cityHandler={setCity} />
              </Animated.View>
            </>
          )}
        </View>
      </ScrollView>
      {/* Footer */}
      {/* Footer */}
      <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={onClearAll}>
            <Text
              style={[
                { textDecorationLine: "underline", color: PrimaryColors.Green },
                type.heading5S,
              ]}
            >
              Clear All
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => router.back()} style={styles.btn}> */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              openCard < 2
                ? continueBtn()
                : navigation.navigate("RestaurantList")
            }
          >
            <Text style={[styles.btnText, type.heading5S]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    gap: 16,
    backgroundColor: "white",
  },
  footer: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: "white",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: PrimaryColors.Green,
  },
  btnText: {
    // fontSize: 16,
    // lineHeight: 21,
    // fontWeight: 'bold',
    // letterSpacing: 0.25,
    color: "white",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 4,
    marginHorizontal: 16,

    borderColor: PrimaryColors.Green,
    borderWidth: 1,
  },
  cardFocus: {
    backgroundColor: "white",
    borderRadius: 4,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,

    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  previewText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "bold",
  },
  previewDate: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  cardHeader: {
    fontSize: 24,
    // padding: 16,
    paddingTop: 16,
    ...spacing.vert1x,
    fontWeight: "bold",
  },
  cardSub: {
    // fontSize: 14,
    // color: "#333",
    // fontWeight: "400",
    // paddingLeft: 16,
    ...type.body1M,
    ...spacing.vert1x,
  },
  cardBody: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
