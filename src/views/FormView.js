import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const FormView = () => {
  const [task, setTask] = useState('');
  const [itemList, setItemList] = useState([]);

  const onChange = text => {
    setTask(text);
  };
  const addTask = () => {
    setItemList([...itemList, {id: Math.random() + 1, task}]);
    setTask('');
  };

  /*el filter devuelve un array con todos los item que tengan un id distinto al que le paso a la funcion, filtrando asi el item que quiero eliminar en cuestion */
  const deleteTask = id => {
    setItemList(itemList.filter(task => task.id !== id));
  };
  return (
    <>
      <View style={styles.formContainer}>
        <TextInput
          autoFocus
          style={styles.textInput}
          placeholder="do something"
          onChangeText={text => onChange(text)}
          value={task}></TextInput>
        <Button
          title="SEND"
          color="#C39DE8"
          onPress={addTask}
          disabled={task.trim() === ''}
        />
      </View>
      {itemList.length > 0 ? (
        <View style={styles.listContainer}>
          {/* flatlist es un componente que de manera optimizada me devuelve una lista, hace el map y eso */}
          <FlatList
            /*que es un keyExtractor??? --> le da un key unico a cada item de la lista? entonces no es necesario agregar el key al view mas abajo
            
            cito al profe: Este prop lo que hace es estrae por nosotros cual va a ser el identificador unico (key) de esta lista.
            */
            keyExtractor={item => item.id}
            data={itemList}
            renderItem={({item, index}) => {
              //aca quiero agregar una const para darle los styles aplicando la const que quiero dependiendo si se hace o no el press al touchable de finalizada (que hare en otro momento no hoy)
              return (
                <View style={styles.listItem}>
                  <Text style={styles.listItemText}>{item.task}</Text>
                  <TouchableOpacity onPress={() => deleteTask(item.id)}>
                    <Text style={styles.listItemDelete}>✖</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />

          <Button
            style={styles.listBtnClear}
            onPress={() => setItemList([])}
            title="CLEAR LIST"
            color="#C39DE8"
          />
        </View>
      ) : (
        // si no hay lista muestro esto
        <Text style={styles.listTextEmpty}>Empty List 😔</Text>
      )}
    </>
  );
};
// falta dar estilos a la lista y a text de empty list
const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    flex: 0.8,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  listContainer: {
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  listTextEmpty: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 40,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#C39DE8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  listItemText: {
    fontSize: 20,
    flexBasis: '85%',
    textTransform: 'capitalize',
  },
  listItemDelete: {
    display: 'flex',
    color: '#C39DE8',
    fontSize: 20,
    margin: 10,
  },
});

export default FormView;
