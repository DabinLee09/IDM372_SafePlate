import React from 'react';
import { Image } from 'react-native';
import { AllergyGuide } from '../guides/GuideContent';
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'

import { PrimaryColors, SecondaryColors, TintsColors } from '../../settings/styles/Colors';
import GlobalStyles from '../../settings/styles/GlobalStyle';


const TreeNutGuideContent = () => {
  return (
    <SafeAreaView style={{backgroundColor:TintsColors.White}}>
      <ScrollView>
        <View>
          <AllergyGuide
            title="Tree Nut"
            restriction="tree nut"
            restrictionPlural="tree nuts"

            colorText={TintsColors.DarkGray}
            imageSource={require('../../assets/images/guides/mascot-treenut.png')}
            colorBack={SecondaryColors.MutedBlue}

            freeOf="almonds, Brazil nuts, cashews, chestnuts, hazelnuts, macadamia nuts, pecans, pine nuts, pistachios, and walnuts"
            
            understandingRestriction="A tree nut allergy is a heightened sensitivity to one or more tree nuts, one of the most common allergy-causing foods. Although only about 40% of children with tree nut allergies have a peanut allergy, there's a significant chance of cross-reactivity among different tree nuts, with around 50% of children allergic to one tree nut also being allergic to another. Unlike some allergies that can be outgrown, tree nut allergies often persist throughout life. "
            foodImage1={require('../../assets/images/guides/nuts.png')}

            ingredient1="Pesto"
            ingredient2="Nut milk (e.g., almond milk, cashew milk)"
            ingredient3="Nut oils (e.g., walnut oil, almond oil)"
            ingredient4="Nut paste (e.g., almond paste)"
            
            riskTitle1="Desserts and Baked Goods"
            riskBody1="Always inquire about desserts and baked goods, as they may contain almond flour, ground nuts, or nut extracts."
            foodImage2={require('../../assets/images/guides/baked-goods.png')}
            
            riskTitle2="Ice Cream"
            riskBody2="Flavors like pistachio may contain actual tree nuts or traces of them. Cross-contamination is also common in ice cream parlors due to shared scoops. This risk extends to soft-serve ice cream, custard, water ice, and yogurt shops that use the same dispensing equipment for various flavors."
            foodImage3={require('../../assets/images/guides/ice-cream.png')}
            
            riskTitle3="African and Asian Food (especially Chinese, Indian, Thai, and Vietnamese)"
            riskBody3="Dishes from various global cuisines pose a significant risk of cross-contact with tree nuts, even when ordering dishes without tree nuts."
            foodImage4={require('../../assets/images/guides/asian-food.png')}

            riskTitle4="Salads"
            riskBody4="Candied nuts, such as almonds, or pecans, are common salad toppings."
            foodImage5={require('../../assets/images/guides/salad.png')}

            Link="https://www.foodallergy.org/living-food-allergies/food-allergy-essentials/common-allergens/tree-nut"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TreeNutGuideContent;