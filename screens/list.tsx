import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, List, ListItem } from '@ui-kitten/components';
import axios from 'axios';


  const ArtList: React.FC<{}> = () => {
    const [data, setData] = useState<any>(undefined);

    useEffect(() => {
      const fetchData = async (): Promise<void> => {
        try {
          const response = await axios.get('https://api.artic.edu/api/v1/artworks');
          setData(response)
          console.log('data')
          console.log(response.data.data);
        } catch (error) {
            console.log('errorr')
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    const renderItem = ({ item, index }: { item: { title: string }; index: number }): React.ReactElement => (
        <ListItem title={`${item.title} ${index + 1}`} />
      );
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           
            <Text category='h1'>list </Text>
        {data &&  <List
          style={styles.container}
          data={data}
          renderItem={renderItem}
        />}
       
      </Layout>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      maxHeight: 180,
    },
  });

  export default ArtList