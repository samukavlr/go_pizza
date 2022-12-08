import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { FlatList, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// npm i react-native-iphone-x-helper --save
// import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    
    colors: theme.colors.gradient,
    start: { x: 0, y: 1 },  
    end: { x: 0.5, y: 0.5 }
  
  }))`
  
    flex: 1;
    align-items: center;
  
  `;

export const Header = styled.View`
  

`;


export const Photo = styled.Image`
    width:311px;
    height: 364px;
    /* margin-left: ${RFValue(32)}px;
    margin-right: ${RFValue(32)}px; */
    margin-top: 85px;
    
`;

export const Title = styled.Text`
    font-size: 32px;
    font-family: ${( { theme } ) => theme.fonts.dm};
    margin-right: auto;
    margin-left: 42px;
    margin-bottom: 16px;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 23px;
`;

export const ContainerInput = styled.View`
    
    width: 311px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const User = styled.View`
    margin-left: 17px;

`;

export const UserGreething = styled.Text`
    color: ${( { theme } ) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${( { theme } ) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${( { theme } ) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${( { theme } ) => theme.fonts.bold};

`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: ${RFValue(58)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
    /* iphone */
    /* margin-top: $(getStatusBarHeight) + ${RFValue(28)}px; */ 

export const Icon = styled(Feather)`
    color: ${( { theme } ) => theme.colors.orange};
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{paddingLeft:24}
})`
    flex-direction:row;
    width:100%;

    position:absolute;
    margin-top: ${RFPercentage(24)}px;
`;

export const Transactions = styled.View`
    flex:1;
    padding: 0 24px;

    margin-top: ${RFPercentage(18)}px;
`;



// export const TransactionList = styled.FlatList.attrs({
//     showsVerticalScrollIndicator:false,
// })``;

export const TransactionList = styled(
    FlatList as new () => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator:false,
})``;

export const LoadContainer = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`;