import { View, Text } from 'react-native'
import React from 'react'
import { curatedGuideArr } from "../components/curatedGuide/curatedGuideArr";

export default function CuratedGuide() {
  return (
    <View>
      <Text>CuratedGuide</Text>
      <curatedGuideArr/>
    </View>
  )
}



// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import * as FileSystem from 'expo-file-system';
// import * as Papa from 'react-papaparse';
// // import { Asset } from 'expo-asset';

// const CuratedGuide = () => {
//     useEffect(() => {
//         readCSVFile(); // Trigger reading CSV file on component mount
//     }, []);

//     const readCSVFile = async () => {
//         try {
//             // Load the CSV file as an asset
//             const csvAsset = Asset.fromModule(require('../assets/datasets/safeplate_curated-guide_content.csv'));
//             await csvAsset.downloadAsync(); // Ensure the asset is downloaded

//             // Get the local URI of the downloaded asset
//             const localUri = csvAsset.localUri || csvAsset.uri;

//             // Read the file contents
//             const data = await FileSystem.readAsStringAsync(localUri);
//             parseCSVData(data); // Parse the CSV data
//         } catch (error) {
//             console.error('Error reading CSV file:', error);
//         }
//     };

//     const parseCSVData = (csvData) => {
//         // Parse the CSV data using react-papaparse
//         Papa.parse(csvData, {
//             complete: (result) => {
//                 // Result.data will contain the parsed data
//                 console.log(result.data);
//                 // You can handle this data further as per your requirement
//             },
//             error: (error) => {
//                 console.error('Error parsing CSV:', error);
//             }
//         });
//     };

//     return (
//         <View>
//             <Text>CuratedGuide Placeholder</Text>
//         </View>
//     );
// };

// export default CuratedGuide;






// // import React, { useEffect } from 'react';
// // import { View, Text } from 'react-native';
// // import * as FileSystem from 'expo-file-system';
// // import * as Papa from 'react-papaparse';

// // const CuratedGuide = () => {
// //     useEffect(() => {
// //         readCSVFile(); // Trigger reading CSV file on component mount
// //     }, []);

// //     const readCSVFile = async () => {
// //         try {
// //             // Assuming you have the localUri defined somewhere
// //             const localUri = '../assets/datasets/safeplate_curated-guide_content.csv';

// //             // Check if the file exists and is not a directory
// //             const { exists, isDirectory } = await FileSystem.getInfoAsync(localUri);
// //             if (exists && !isDirectory) {
// //                 // If the file exists and is not a directory, read its contents
// //                 const data = await FileSystem.readAsStringAsync(localUri);
// //                 parseCSVData(data); // Parse the CSV data
// //             } else {
// //                 console.error('CSV file does not exist or is a directory.');
// //             }
// //         } catch (error) {
// //             console.error('Error reading CSV file:', error);
// //         }
// //     };

// //     const parseCSVData = (csvData) => {
// //         // Parse the CSV data using react-papaparse
// //         Papa.parse(csvData, {
// //             complete: (result) => {
// //                 // Result.data will contain the parsed data
// //                 console.log(result.data);
// //                 // You can handle this data further as per your requirement
// //             },
// //             error: (error) => {
// //                 console.error('Error parsing CSV:', error);
// //             }
// //         });
// //     };

// //     return (
// //         <View>
// //             <Text>CuratedGuide Placeholder</Text>
// //         </View>
// //     );
// // };

// // export default CuratedGuide;





// // import { Asset } from 'expo-asset';
// // import { useEffect } from 'react';
// // import { View, Text } from 'react-native';
// // import * as FileSystem from 'expo-file-system';


// // const CuratedGuide = () => {
// //     useEffect(() => {
// //         readCSVFile(); // Trigger reading CSV file on component mount
// //     }, []);

// //     const readCSVFile = async () => {
// //         try {
// //             // Load the CSV file as an asset
// //             const csvAsset = Asset.fromModule(require('../assets/datasets/safeplate_curated-guide_content.csv'));
// //             await csvAsset.downloadAsync(); // Ensure the asset is downloaded

// //             // Check if the file exists and is not a directory
// //             const { exists, isDirectory } = await FileSystem.getInfoAsync(localUri);
// //             if (exists && !isDirectory) {
// //                 // If the file exists and is not a directory, read its contents
// //                 const data = await FileSystem.readAsStringAsync(localUri);
// //                 parseCSVData(data); // Parse the CSV data
// //             } else {
// //                 console.error('CSV file does not exist or is a directory.');
// //             }
// //         } catch (error) {
// //             console.error('Error reading CSV file:', error);
// //         }
// //     };

// //     const parseCSVData = (csvData) => {
// //         // Parse the CSV data (example: split by newline and comma)
// //         const rows = csvData.split('\n').map(row => row.split(','));

// //         // Now you have an array of arrays, each inner array representing a row of data
// //         console.log(rows);
// //         // You can handle this data further as per your requirement
// //     };

// //     return (
// //         <View>
// //             <Text>CuratedGuide Placeholder</Text>
// //         </View>
// //     );
// // };

// // export default CuratedGuide;
