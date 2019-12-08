import React from "react";
import {
    ImageBackground,
    View,
    Image,
    Text,
    Platform,
    ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles.js";

import bgImage from "../../../assets/background-login.jpeg";
import c_image from "../../../assets/Centro_Curitiba.jpg";

export default class MainScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {}
    };

    render() {
        return (
            <View style={styles.backgroundContainer}>
                
                <View style={styles.imageContainer}>
                    <Image source={c_image} style={styles.imageStyle} />
                </View>
                <View style={styles.itemDescription}>
                    <Ionicons
                        name={Platform.OS === "ios" ? "ios-pin" : "pin"}
                        size={50}
                        color="black"
                    />
                    <View style={{ paddingRight: 10 }}>
                        <Text style={{ fontSize: 30, textAlign: "right" }}>Centro</Text>
                        <Text style={{ fontSize: 15, textAlign: "right" }}>Av. Sete de Setembro, 1353</Text>
                    </View>
                </View>
                <View style={styles.moreItems}>
                    <ScrollView horizontal>
                        {/* Inside the next view theres a bunch of random shit just to test the scrollview */}
                        <View style={{ flexDirection: "row" }}>
                            <Ionicons
                                style={{ paddingRight: 10 }}
                                name={Platform.OS === "ios" ? "ios-image" : "img"}
                                size={100}
                                color="grey"
                            />

                            <Ionicons
                                style={{ paddingRight: 10 }}
                                name={Platform.OS === "ios" ? "ios-image" : "img"}
                                size={100}
                                color="grey"
                            />

                            <Ionicons
                                style={{ paddingRight: 10 }}
                                name={Platform.OS === "ios" ? "ios-image" : "img"}
                                size={100}
                                color="grey"
                            />

                            <Ionicons
                                style={{ paddingRight: 10 }}
                                name={Platform.OS === "ios" ? "ios-image" : "img"}
                                size={100}
                                color="grey"
                            />

                            <Ionicons
                                style={{ paddingRight: 10 }}
                                name={Platform.OS === "ios" ? "ios-image" : "img"}
                                size={100}
                                color="grey"
                            />

                            <Ionicons
                                style={{ paddingRight: 10 }}
                                name={Platform.OS === "ios" ? "ios-image" : "img"}
                                size={100}
                                color="grey"
                            />

                            <Ionicons
                                style={{ paddingRight: 10 }}
                                name={Platform.OS === "ios" ? "ios-image" : "img"}
                                size={100}
                                color="grey"
                            />
                        </View>
                    </ScrollView>
                </View>
                {/* Use this footer for the details page if you don't want to do it again  */}
                <View style={styles.footer}>
                    <Ionicons
                        name={Platform.OS === "ios" ? "ios-contact" : "user"}
                        size={50}
                        color="black"
                    />
                    <View style={{ paddingLeft: 10 }}>
                        <Text>Aluno</Text>
                        <Text style={{ fontWeight: 'bold' }}>UTFPR</Text>
                    </View>
                    <Ionicons style={{ paddingLeft: 100 }}
                        name={Platform.OS === "ios" ? "ios-share" : "share"}
                        size={50}
                        color="black"
                    />
                    <Ionicons style={{ paddingLeft: 20 }}
                        name={Platform.OS === "ios" ? "ios-heart-empty" : "like"}
                        size={50}
                        color="black"
                    />
                    <Ionicons style={{ paddingLeft: 20 }}
                        name={Platform.OS === "ios" ? "ios-add-circle" : "add"}
                        size={50}
                        color="black"
                    />
                </View>
            </View>
        );
    }
}
