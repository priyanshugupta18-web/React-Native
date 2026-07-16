import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { object, string, number } from 'yup';

let passwordSchema = object({
  passwordLength: number()
    .required()
    .max(20, 'maximum length of the password can be 20'),
});
export default function App() {
  const [password, setPassword] = useState('');

  const generateString = ({
    passwordLength,
    uppercase,
    lowercase,
    number,
    symbols,
  }: {
    uppercase: boolean;
    passwordLength: string;
    lowercase: boolean;
    number: boolean;
    symbols: boolean;
  }) => {
    let passwordString = '';
    if (uppercase || lowercase || symbols || number) {
      if (uppercase) {
        passwordString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
      if (lowercase) {
        passwordString += 'abcdefghijklmnopqrstuvwxyz';
      }
      if (number) {
        passwordString += '0123456789';
      }
      if (symbols) {
        passwordString += '!@#$%^&*()_+-=[]{}|;:\',.<>/?`~"\\';
      }
      generatePassword(Number(passwordLength), passwordString);
    } else {
      setPassword('Please check any of the boxes above to generate password');
    }
  };

  const generatePassword = (passwordLength: number, passwordString: string) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      let index = Math.floor(Math.random() * passwordString.length);
      result += passwordString.charAt(index);
    }
    setPassword(result);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#000000',
        }}
      >
        <View style={{...styles.listLayout, backgroundColor:'rgba(255,255,255,0.05)', width:300, marginVertical:40}}>
          <Text style={{...styles.text, textAlign:'center', fontSize:24, fontWeight:600}}>Password Generator</Text>
        </View>
        <View style={styles.formLayout}>
          <Formik
            initialValues={{
              passwordLength: '',
              uppercase: false,
              lowercase: false,
              number: false,
              symbols: false,
            }}
            validationSchema={() => passwordSchema}
            onSubmit={values => generateString(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              setFieldValue,
              handleSubmit,
              resetForm,
            }) => (
              <>
                <View
                  style={{ ...styles.fieldLayout, flexDirection: 'column' }}
                >
                  <Text style={styles.text}>
                    Enter the Number of Characters
                  </Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      marginTop: 10,
                      padding: 10,
                      borderRadius: 10,
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      width: 260,
                    }}
                    keyboardType="numeric"
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    onBlur={handleBlur('passwordLength')}
                  ></TextInput>
                  {errors?.passwordLength && touched.passwordLength && (
                    <Text
                      style={{ color: 'red', fontSize: 10, letterSpacing: 1 }}
                    >
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                <View style={styles.listLayout}>
                  <View
                    style={{ ...styles.fieldLayout, alignItems: 'center' }}
                  >
                    <Text style={{...styles.text, width:175}}>Include Uppercase Letters </Text>
                    <BouncyCheckbox
                      isChecked={values.uppercase}
                      disableText
                      fillColor="green"
                      size={30}
                      useBuiltInState={true}
                      iconStyle={{ borderColor: 'green' }}
                      onPress={value => {
                        setFieldValue('uppercase', value);
                      }}
                    />
                  </View>
                  <View
                    style={{ ...styles.fieldLayout, alignItems: 'center' }}
                  >
                    <Text style={{...styles.text, width: 175}}>Include Lowercase Letters </Text>
                    <BouncyCheckbox
                      isChecked={values.lowercase}
                      disableText
                      fillColor="green"
                      size={30}
                      useBuiltInState={true}
                      iconStyle={{ borderColor: 'green' }}
                      onPress={value => {
                        setFieldValue('lowercase', value);
                      }}
                    />
                  </View>
                  <View
                    style={{ ...styles.fieldLayout, alignItems: 'center' }}
                  >
                    <Text style={{...styles.text, width: 175}}>Include Numbers </Text>
                    <BouncyCheckbox
                      isChecked={values.number}
                      disableText
                      fillColor="green"
                      size={30}
                      useBuiltInState={true}
                      iconStyle={{ borderColor: 'green' }}
                      onPress={value => {
                        setFieldValue('number', value);
                      }}
                    />
                  </View>
                  <View
                    style={{ ...styles.fieldLayout, alignItems: 'center' }}
                  >
                    <Text style={{...styles.text, width: 175}}>Include Symbols </Text>
                    <BouncyCheckbox
                      isChecked={values.symbols}
                      disableText
                      fillColor="green"
                      size={30}
                      useBuiltInState={true}
                      iconStyle={{ borderColor: 'green' }}
                      onPress={value => {
                        setFieldValue('symbols', value);
                      }}
                    />
                  </View>
                </View>
                <View style={styles.buttonLayout}>
                  <Pressable style={styles.buttons} onPress={handleSubmit}>
                    <Text style={{color:'white', letterSpacing:1}}>Generate Password</Text>
                  </Pressable>
                  <Pressable
                    style={styles.buttons}
                    onPress={() => {
                      resetForm();
                      setPassword('');
                    }}
                  >
                    <Text style={{color:'white', letterSpacing:1}}>Reset</Text>
                  </Pressable>
                </View>
              </>
            )}
          </Formik>
        </View>
        {password && (
          <View style={{...styles.listLayout, width: 300, }}>
            <Text style={{...styles.text, color:'red'}}>Long Press to copy</Text>
            <Text selectable style={{...styles.text, textAlign: 'center', marginTop: 30}}>{password}</Text>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  fieldLayout: {
    marginVertical: 5,
    flexDirection: 'row',
    columnGap: 20,
  },
  buttonLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttons: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'green',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  formLayout: {
    width: 300,
    padding: 20,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    height: 400,
  },
  listLayout: {
    padding: 16,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    
  },
  text: {
    color: 'white',
    letterSpacing: 1,
    fontSize: 12,
  },
});
