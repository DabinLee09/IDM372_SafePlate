import { View, Text, FlatList } from "react-native";
import React from "react";
import { type } from "../../settings/styles/Typography";
import { TintsColors } from "../../settings/styles/Colors";
import { useData } from "../DataContext";
import Pill from "../../settings/Pill";
import DietaryIcons from "../../assets/DietaryIcons";
import { spacing } from "../../settings/styles/Spacing";
import { Image } from "react-native";
import { Divider } from "@rneui/base";

export default function FullMenu() {
  const { select } = useData();



const allergyDietArr = [
    {
        name: "Wheat",
        icon: DietaryIcons.WheatSolid ,
        dietaryType: "allergy",
        type: select,
      },
      {
        name: "Peanut",
        icon: DietaryIcons.PeanutSolid ,
        dietaryType: "allergy",
        type: select,
      },
      {
        name: "Dairy",
        icon: DietaryIcons.DairySolid ,
        dietaryType: "allergy",
        type: select,
      },
      {
        name: "Egg",
        icon: DietaryIcons.EggSolid ,
        dietaryType: "allergy",
        type: select,
      },
      {
        name: "Sesame",
        icon: DietaryIcons.SesameSolid ,
        dietaryType: "allergy",
        type: select,
      },
      {
        name: "Soy",
        icon: DietaryIcons.SoySolid ,
        dietaryType: "allergy",
        type: select,
      },
      {
        name: "Fish",
        icon: DietaryIcons.FishSolid ,
        dietaryType: "allergy",
        type: select,
      },
      {
        name: "Shellfish",
        icon: DietaryIcons.ShellfishSolid ,
        dietaryType: "allergy",
        type: select,
      },
      {
        name: "Treenut",
        icon: DietaryIcons.TreenutSolid,
        dietaryType: "allergy",
        type: select,
      },
      {
        name: "Halal",
        icon: DietaryIcons.HalalSolid ,
        dietaryType: "diet",
        type: select,
      },
      {
        name: "Vegan",
        icon: DietaryIcons.VeganSolid ,
        dietaryType: "diet",
        type: select,
      },
      {
        name: "Vegetarian",
        icon: DietaryIcons.VegetarianSolid ,
        dietaryType: "diet",
        type: select,
      },
      {
        name: "keto",
        icon: DietaryIcons.KetoSolid ,
        dietaryType: "diet",
        type: select,
      },

]


  const asianArr = [
    {
      restaurantCuisine: "Asian",
      menuItemName: "Crab Rangoons (3)",
      menuItemDescription:
        "Crabmeat, cream cheese and carrots wrapped in wonton skins & golden-fried. Served with sweet & tangy sauce.",
      menuItemPrice: "$6.60",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/52dc5612-da06-4c64-a891-7739d0fea311-2a377897-cdc2-457d-87a8-4d04e022c892-retina-large.JPG",
      menuItemCategory: "Appetizer",
      menuItemAllergies: "dairy, peanut, halal, sesame, soy, fish, egg",
      menuItemDiets: "halal",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "Chicken Egg Roll(2)",
      menuItemDescription:
        "Chicken sauteed with sweet onions & mushrooms rolled in wheat paper & fried to a crispy golden brown. Served with sweet & tangy sauce.",
      menuItemPrice: "$6.60",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/b6ce1da6-587f-407d-bc77-3723c3545f40-32cc04b7-b4ec-41b3-9707-37bcae15f395-retina-large.JPG",
      menuItemCategory: "Appetizer",
      menuItemAllergies: "dairy, peanut, halal, sesame, fish, shellfish",
      menuItemDiets: "halal",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "Chicken Lettuce Wraps",
      menuItemDescription:
        "Minced water chestnuts, carrots & mushrooms sauteed with chicken or shrimp. Served with iceberg lettuce & peking duck sauce. Vegetarian available upon request. Substitute shrimp for an additional charge.",
      menuItemPrice: "$12.96",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/e165fa61-342a-410d-975e-13d2f89d7ccf-3dd2ab34-210e-4144-b418-7e5399c73f44-retina-large.JPG",
      menuItemCategory: "Appetizer",
      menuItemAllergies: "dairy, gluten, halal, vegetarian",
      menuItemDiets: "halal, vegetarian",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "Singapore Noodles",
      menuItemDescription:
        "Rice Vermicelli stir-fried with eggs, BBQ port, shrimp, bell peppers, callions & bean sprouts in our curry sauce.",
      menuItemPrice: "$17.10",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/9ed36ed5-d01f-4cbd-82f2-0842b846d149-06ae4fd2-6aa9-4070-b992-32232c2e56a2-retina-large.JPG",
      menuItemCategory: "Stir-Fried Noodles",
      menuItemAllergies: "tree nut, peanut, dairy, halal, fish",
      menuItemDiets: "halal",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "Kim Son Deluxe Lomein",
      menuItemDescription:
        "Lomein noodles stir-fried with beef, chicken, shrimp, cabbage, carrots & onions in Mama La's special sauce.",
      menuItemPrice: "$18.60",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/167e0580-277e-4f44-b4a4-8548911db6d2-d6f93dfc-2ae8-4681-8096-156af3912473-retina-large.JPG",
      menuItemCategory: "Stir-Fried Noodles",
      menuItemAllergies: "tree nut, fish",
      menuItemDiets: "",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "Pad Thai",
      menuItemDescription:
        "Thin rice noodles stir-fried with chicken & shrimp in our tangy, spicy Thai-style sauce. Served with bean sprouts jalapenos, cilantro, lime & peanuts",
      menuItemPrice: "$17.10",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/02675b9a-016f-42fb-b66c-278df6b675e6-d7a05655-01e5-4662-b6d1-1ff34b14dc25-retina-large.JPG",
      menuItemCategory: "Stir-Fried Noodles",
      menuItemAllergies: "tree nut, fish, halal",
      menuItemDiets: "halal",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "BBQ Pork and Snow Peas",
      menuItemDescription:
        "Served with vegetable fried rice. Steamed white or brown rice available upon request.",
      menuItemPrice: "$14.29",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/f4b75f3c-7747-432a-9542-abbfb8f2a6c8-d33b98cd-0a3f-45ad-9055-9211889a9653-retina-large.JPG",
      menuItemCategory: "Beef & Pork Wok Combos",
      menuItemAllergies: "treenut, fish, egg, shellfish",
      menuItemDiets: "",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "Beef and Broccoli",
      menuItemDescription:
        "Served with vegetable fried rice. Steamed white or brown rice available upon request.",
      menuItemPrice: "$17.10",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/55f2289c-8cc0-484c-b1f1-0a86283c1403-a66c5bcb-3249-4558-a8cf-93d3042042e0-retina-large.JPG",
      menuItemCategory: "Beef & Pork Wok Combos",
      menuItemAllergies: "peanut, fish, egg, dairy, shellfish",
      menuItemDiets: "",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "Orange Chicken",
      menuItemDescription:
        "Served with vegetable fried rice. Steamed white or brown rice available upon request.",
      menuItemPrice: "$17.10",
      menuItemImageUrl:
        "http://doordash-static.s3.amazonaws.com/media/photosV2/27bd006d-fac7-42fd-af7d-bcdc0300566d-749d738d-d599-4c4b-9121-64a1d5af71eb-retina-large.JPG",
      menuItemCategory: "Chicken - Wok Combinations",
      menuItemAllergies: "halal, fish, egg, shellfish",
      menuItemDiets: "halal",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "Sesame Chicken",
      menuItemDescription:
        "Served with vegetable fried rice. Steamed white or brown rice available upon request.",
      menuItemPrice: "$17.10",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/d94aef82-88a3-47dc-89d0-8397c253903c-78ee14dc-ecda-44e3-ad5b-b53508c1d769-retina-large.JPG",
      menuItemCategory: "Chicken - Wok Combinations",
      menuItemAllergies: "fish, shellfish, keto",
      menuItemDiets: "",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "Deluxe Tofu",
      menuItemDescription:
        "Served with vegetable fried rice. Steamed white or brown rice available upon request.",
      menuItemPrice: "$14.70",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/167cdd21-24c0-47dc-95ac-c6aa455ae38b-aab4bffc-c09e-4614-9145-c53517ffb1e6-retina-large.JPG",
      menuItemCategory: "Vegetarian - Wok Combinations",
      menuItemAllergies: " dairy, vegetarian, keto, gluten, fish, shellfish",
      menuItemDiets: "halal, vegan, vegetarian, keto",
    },
    {
      restaurantCuisine: "Asian",
      menuItemName: "Curry Tofu",
      menuItemDescription:
        "Served with vegetable fried rice. Steamed white or brown rice available upon request.",
      menuItemPrice: "$14.70",
      menuItemImageUrl:
        "https://doordash-static.s3.amazonaws.com/media/photosV2/6b88ea56-af75-4e99-b62e-3c12c0d5ac09-c489dc32-2008-4ea6-ba82-6cc0edb565cd-retina-large.JPG",
      menuItemCategory: "Vegetarian - Wok Combinations",
      menuItemAllergies: " dairy, halal, vegan, gluten, fish, shellfish",
      menuItemDiets: "halal, vegan, vegetarian, keto",
    },
  ];

  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <Text>FullMenu</Text>
      <FlatList
        data={asianArr}
        renderItem={({ item }) => (
            <View style={{ flexDirection: "row", alignItems: "flex-start", gap:8}}>
  <MenuImg image={item.menuItemImageUrl} style={{ marginRight:8, }} />
  <View style={{ flex: 1, marginRight:8,}}>
                <MenuInfo
                menuItemName={item.menuItemName}
                menuItemDescription={item.menuItemDescription}
                />
                <AllergyMenu
                allergyList={item.menuItemAllergies}
                allergyDietArr={allergyDietArr}
                />
            </View>
            {/* <Divider width={1} color={"red"} /> */}
            </View>
        )}
        style={{gap: 16,}}
        keyExtractor={(item) => item.menuItemName}
        />

    </View>
  );
}

const MenuImg = (props) => (
    <Image
              source={{
                uri: props.image,
              }}
              style={{
                width: 112,
                height: 180,
                borderRadius: 4,
                resizeMode:"cover",
          marginBottom: 16,
              }}
            />
)

const MenuInfo = (props) => (
  <View>
    <Text style={[type.heading3M, { color: TintsColors.MidGray }]}>
      {props.menuItemName}
    </Text>
    <Text
      style={[type.cap4xs, { color: TintsColors.MidGray }]}
      numberOfLines={2}
      enum="tail"
    >
      {props.menuItemDescription}
    </Text>
  </View>
);

const AllergyMenu = (props) => (
  <View>
    <Text style={[type.heading5S, { color: TintsColors.DarkGray }]}>
      Does not contain:
    </Text>
    <FlatList
      // horizontal
      data={props.allergyList.split(",").slice(0, 4)}
      renderItem={({ item }) => (
        <AllergyItem allergy={item.trim()} allergyDietArr={props.allergyDietArr} />
      )}
      keyExtractor={(item) => item}
      numColumns={2}
      initialNumToRender={4}
    />
  </View>
);

const AllergyItem = ({ allergy, allergyDietArr }) => {
  const allergyItem = allergyDietArr.find(
    (item) => item.name.toLowerCase() === allergy.toLowerCase()
  );

  if (!allergyItem) return null;

  return (
    <Pill
      style={[spacing.vert1x, { marginRight: 8 }]}
      size="small" // Specify the size: 'small' or 'large'
      type="inactive" // Specify the type: 'active' or 'inactive'
      dietaryType={allergyItem.dietaryType} // Specify the dietary type: 'allergy' or 'diet'
      text={allergyItem.name} // Specify the text to display in the pill
      icon={allergyItem.icon} // Pass the icon component or source if needed
    />
  );
};


  
//   const DietItem = ({ diet, dietArr }) => {
//     const dietItem = dietArr.find(
//       (item) => item.name.toLowerCase() === allergy.toLowerCase()
//     );
  
//     if (!dietItem) return null;
  
//     return (
//       <Pill
//         style={[spacing.vert1x, { marginRight: 8 }]}
//         size="small" // Specify the size: 'small' or 'large'
//         type="inactive" // Specify the type: 'active' or 'inactive'
//         dietaryType="allergy" // Specify the dietary type: 'allergy' or 'diet'
//         text={allergyItem.name} // Specify the text to display in the pill
//         icon={allergyItem.icon} // Pass the icon component or source if needed
//       />
//     );
//   };
  