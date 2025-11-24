import {View, Text} from 'react-native';


export default function DescriptionProduct({
    title,
    description,
}) {


    return (
        <View>
            <Text style={{ fontFamily: 'PatuaOne-Regular', fontSize: 25, padding: 20, color: "#FFFFFF" }}>{title}</Text>
            <Text style={{ fontFamily: 'PatuaOne-StackSansText-VariableFont_wght', fontSize: 20, marginLeft: 20, color: "#FFFFFF" }}>
                {description}
            </Text>
        </View>
    )
}