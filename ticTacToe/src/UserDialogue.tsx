import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import { object, string } from 'yup';
import useData from '../contexts/contexts';
import { Formik } from 'formik';

let userSchema = object({
    Player1: string().required().max(12, 'Length exceeded'),
    Player2: string().required().max(12, 'Length exceeded'),
  });

export default function DialougeBox() {
  const { setPlayers } = useData();

  return (
    <View
      style={[styles.container, StyleSheet.absoluteFill]}
    >
      <Formik
        initialValues={{
          Player1: '',
          Player2: '',
        }}
        validationSchema={userSchema}
        onSubmit={values => {
          setPlayers({
            player1: values.Player1,
            player2: values.Player2,
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <View style={styles.card}>
            <View style={styles.inputLayout}>
              <Text style={[styles.text, { textTransform: 'uppercase' }]}>
                Player X
              </Text>
              <View>
                <TextInput
                  style={styles.userInput}
                  value={values.Player1}
                  onChangeText={handleChange('Player1')}
                  onBlur={handleBlur("Player1")}
                />
                <View style={{ height: 15 }}>
                  {errors.Player1 && touched.Player1 && (
                    <Text style={styles.warningText}>{errors.Player1}</Text>
                  )}
                </View>
              </View>
            </View>
            <View style={styles.inputLayout}>
              <Text style={[styles.text, { textTransform: 'uppercase' }]}>
                Player O
              </Text>
              <View>
                <TextInput
                  style={styles.userInput}
                  value={values.Player2}
                  onChangeText={handleChange('Player2')}
                  onBlur={handleBlur("Player2")}
                />
                <View style={{ height: 15 }}>
                  {errors.Player2 && touched.Player2 && (
                    <Text style={styles.warningText}>{errors.Player2}</Text>
                  )}
                </View>
              </View>
            </View>
            <Pressable onPress={handleSubmit} style={({ pressed }) => [
              styles.button,
              pressed && { transform: [{ translateY: 2 }] },
            ]}>
              <Text
                style={styles.btnText}
              >
                Confirm
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    padding: 30,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    paddingVertical: 10,
    backgroundColor: '#0c54f2',
    elevation: 5,
    width: 220,
    marginTop: 15,
  },
  text: {
    fontSize: 12,
    color: 'black',
    letterSpacing: 0.5,
    fontWeight: "500",
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 50,
  },
  warningText: {
    color: 'red',
    letterSpacing: 0.5,
    fontSize: 10,
  },
  btnText: {
    color: 'white',
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: "600",
  },
  userInput: {
    width: 220,
    padding: 8,
    height: 40,
    color: 'gray',
    fontFamily:"System",
    backgroundColor:"#eeeded"
  },
  inputLayout: {
    display: 'flex',
    rowGap: 5,
    justifyContent: 'center',
    height: 80,
  },
});
