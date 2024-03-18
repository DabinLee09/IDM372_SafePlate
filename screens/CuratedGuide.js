import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import TreeNutGuideContent from '../components/guides/TreeNutGuideContent';
import VegetarianGuideContent from '../components/guides/VegetarianGuideContent';
import KetoGuideContent from '../components/guides/KetoGuideContent';
import DairyGuideContent from '../components/guides/DairyGuideContent';
import GlutenGuideContent from '../components/guides/GlutenGuideContent';
import ShellfishGuideContent from '../components/guides/ShellfishGuideContent';
import PeanutGuideContent from '../components/guides/PeanutGuideContent';
import SoyGuideContent from '../components/guides/SoyGuideContent';
import SesameGuideContent from '../components/guides/SesameGuideContent';
import EggGuideContent from '../components/guides/EggGuideContent';
import FishGuideContent from '../components/guides/FishGuideContent';
import VeganGuideContent from '../components/guides/VeganGuideContent';
import HalalGuideContent from '../components/guides/HalalGuideContent';

const CuratedGuide = () => {
  const route = useRoute();
  const { guide } = route.params;

  // Determine the guide content component based on the guide parameter
  let GuideContentComponent = null;

  switch (guide) {
    case 'treenut':
      GuideContentComponent = TreeNutGuideContent;
      break;
    case 'vegetarian':
      GuideContentComponent = VegetarianGuideContent;
      break;
    case 'keto':
        GuideContentComponent = KetoGuideContent;
        break;
    case 'dairy':
        GuideContentComponent = DairyGuideContent;
        break;
    case 'gluten':
        GuideContentComponent = GlutenGuideContent;
        break;
    case 'shellfish':
        GuideContentComponent = ShellfishGuideContent;
        break;
    case 'peanut':
        GuideContentComponent = PeanutGuideContent;
        break;
    case 'soy':
        GuideContentComponent = SoyGuideContent;
        break;
    case 'sesame':
        GuideContentComponent = SesameGuideContent;
        break;
    case 'egg':
        GuideContentComponent = EggGuideContent;
        break;
    case 'fish':
        GuideContentComponent = FishGuideContent;
        break;
    case 'vegan':
        GuideContentComponent = VeganGuideContent;
        break;
    case 'halal':
        GuideContentComponent = HalalGuideContent;
        break;
    default:
      break;
  }

  return (
    <View>
      {GuideContentComponent && <GuideContentComponent />}
    </View>
  );
};

export default CuratedGuide;