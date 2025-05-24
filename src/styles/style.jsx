// styles.js
import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#1E90FF',
  secondary: '#FFD700',
  background: '#F5F5F5',
  textPrimary: '#333333',
  textSecondary: '#777777',
  danger: '#FF4C4C',
  success: '#32CD32',
  white: '#FFFFFF',
  black: '#000000',
  lightGray: '#E0E0E0',
  darkGray: '#666666',
};

export const style = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  heading2: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  heading3: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  body: {
    fontSize: 16,
    color: Colors.primary,
  },
  samllText:{
    fontSize:12,
    color:Colors.white
  },
  caption: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  bold: {
    fontWeight: 'bold',
  },
  centerText: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:15
  },
    team: {
    alignItems: 'center',
  },
  noGap:{
gap:0
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
 card: {     
  borderRadius: 13,                
  padding: 16,                   
  marginVertical: 1,              
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 6,
  elevation: 6,              
},
cardContent:{
  paddingHorizontal:25
},
  primaryBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryBtn: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  dangerBtn: {
    backgroundColor: Colors.danger,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  mt1: { marginTop: 4 },
  mt2: { marginTop: 8 },
  mt3: { marginTop: 12 },
    mt4:{marginTop:20},
  mb1: { marginBottom: 4 },
  mb2: { marginBottom: 8 },
  mb3: { marginBottom: 12 },
  mb4:{marginBottom:14},
  pt1: { paddingTop: 4 },
  pt2: { paddingTop: 8 },
  pt3: { paddingTop: 12 },
  pb1: { paddingBottom: 4 },
  pb2: { paddingBottom: 8 },
  pb3: { paddingBottom: 12 },
  p1: { padding: 4 },
  p2: { padding: 8 },
  p3: { padding: 12 },
  px1: { paddingHorizontal: 4 },
  px2: { paddingHorizontal: 8 },
  px3: { paddingHorizontal: 12 },

});


