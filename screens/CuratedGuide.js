import * as FileSystem from 'expo-file-system';
import { useEffect } from 'react'; // Import useEffect to trigger file reading
import { View, Text} from 'react-native';
// import safePlate from '../assets/datasets/'


const CuratedGuide = () => {
    useEffect(() => {
      readCSVFile(); // Trigger reading CSV file on component mount
    }, []);
  
    const readCSVFile = async () => {
      try {
        const path = FileSystem.documentDirectory + '../';
        const { exists, isDirectory } = await FileSystem.getInfoAsync(path);
  
        if (exists && !isDirectory) {
          const data = await FileSystem.readAsStringAsync(path);
          parseCSVData(data);
        } else {
          console.error('CSV file does not exist or is a directory.');
        }
      } catch (error) {
        console.error('Error reading CSV file:', error);
      }
    };
  
    const parseCSVData = (csvData) => {
      // Parse the CSV data (example: split by newline and comma)
      const rows = csvData.split('\n').map(row => row.split(','));
  
      // Now you have an array of arrays, each inner array representing a row of data
      console.log(rows);
      // You can handle this data further as per your requirement
    };
  
    return (
      <View>
        <Text>CuratedGuide Placeholder</Text>
      </View>
    );
  };
  
  export default CuratedGuide;




// const readCSVFile = async () => {
//   try {
//     const path = FileSystem.documentDirectory + 'safeplate_curated-guide_content.csv';
//     const data = await FileSystem.readAsStringAsync(path);

//     parseCSVData(data);
//   } catch (error) {
//     console.error('Error reading CSV file:', error);
//   }
// };

// import React from 'react';
// import { View, Text } from 'react-native';

// export default function CuratedGuide() {
//     console.log('Rendering CuratedGuide');
    
//     return (
//       <View>
//         <Text>CuratedGuide Placeholder</Text>
//       </View>
//     );
//   }