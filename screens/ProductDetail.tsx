import {View} from "react-native";
import type {StackNavigationProp} from "@react-navigation/stack";
import type {RootStackParamList} from "../types";

type ProductDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>

type ProductDetailProps = {
    navigation: ProductDetailScreenNavigationProp
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ navigation }) => {
    return (
        <View />
    )
}