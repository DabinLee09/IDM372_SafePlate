// import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native'
// import React, { useMemo, useState } from 'react'
// import { useData } from '../DataContext';
// import GlobalStyles from '../../settings/styles/GlobalStyle';
// import { PrimaryColors } from '../../settings/styles/Colors';

// export default function Filter() {
//     const {price} = useData();
//     // const AnimatedTouchableOpacity =
//     // Animated.createAnimatedComponent(TouchableOpacity);

//     const [selectPrice, setSelectPrice] = useState(0);

//     const onClearAll = () => {
//         setSelectPrice(0);
//       };


//   return (
//     <View style={styles.container} >
//       <Text>Price</Text>
//       <View>
//         {selectPrice != 1 && (
//             <TouchableOpacity onPress={() => setSelectPrice(1)}
//             style={styles.priceBtn}
//             >
//                 <Text>$</Text>
//             </TouchableOpacity>
//         )}
//         {selectPrice === 1 &&(
//             <>
//             <Text>$</Text>
//             </>
//         )}
//       </View>
//       <Text>{price}</Text>

      
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 160,
//         paddingHorizontal: 16,
//     },
//     priceBtn: {
//         padding: 4,
//         borderWidth: 1,
//         borderColor: PrimaryColors.Green

//     },
// })