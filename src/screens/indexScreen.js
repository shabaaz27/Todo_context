//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet,FlatList ,Button} from 'react-native';
import BlogContext from '../context/BlogContext';

// create a component
const IndexScreen = () => {
    const {data,addBlogPost} = useContext(BlogContext);
    
    return (
        <View style={styles.container}>
            <Text>List Of Values</Text>
            <Button title="Add Post" onPress={addBlogPost}    />
            <FlatList
            showsVerticalScrollIndicator={false}
                keyExtractor={(item,index)=>"" +index}
                data={data}
                renderItem={({item})=> {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );

};

// define your styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
       
    },
});

//make this component available to the app
export default IndexScreen;
