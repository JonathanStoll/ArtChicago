import React, { useState, useEffect } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout, Text, List, ListItem } from '@ui-kitten/components';
import axios from 'axios';


const ArtList: React.FC<{}> = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const response = await axios.get('https://api.artic.edu/api/v1/artworks');
                setData(response.data.data)
                console.log('data')
                console.log(response.data.data[0].thumbnail);
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

            {/* <Text category='h1'>{data[0].thumbnail.lqip} </Text> */}
         
            {data.length > 0 && <Image
 style= {{
    width: 200,
    height: 200,
  }}
      source={{
        uri: data[1].thumbnail.lqip
      }}

            /> }

            {data.length > 0 && data.map((item: any, index: number) => (
                <Image
                    key={index}
                    source={{ uri: `https://www.artic.edu/iiif/2/${item.thumbnail.lqip}/full/843,/0/default.jpg` }}

                />
            ))}
            {data.length > 0 && <List
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