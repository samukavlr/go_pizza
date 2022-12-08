import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput).attrs(({theme}) => ({
    placeholderTextColor: theme.colors.text,
  }))`
    width:100%;
    height: 56px;
    padding: 18px 16px;
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    border: 1px;
    border-radius: 12;
    border-color: #D16470;
    

   
    margin-bottom: 8px;
`;
