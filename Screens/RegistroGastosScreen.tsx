import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ref, set } from "firebase/database";
import { db } from '../Config/Config';


export default function RegistroGastosScreen() {

    const [id, setId] = useState('')
    const [monto, setMonto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')

    function guardar(id: string, monto: number, categoria: string, descripcion: string) {
        set(ref(db, 'gastos/' + id), {
            monto: monto,
            categoria: categoria,
            descripcion: descripcion
        });
        Alert.alert('Exito','Registro Guardado')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.bold}>Registro de gastos</Text>
            <TextInput
                placeholder='Ingrese ID'
                onChangeText={(texto) => setId(texto)}
                style={styles.box}
            />
            <TextInput
                placeholder='Ingrese el monto'
                onChangeText={(number) => setMonto(number)}
                style={styles.box}
            />
            <TextInput
                placeholder='Ingrese la categoria'
                onChangeText={(texto) => setCategoria(texto)}
                style={styles.box}
            />
            <TextInput
                placeholder='Ingrese la descripcion'
                onChangeText={(texto) => setDescripcion(texto)}
                style={styles.box}
            />
            <Button title='Guardar' onPress={() => guardar(id, parseFloat(monto), categoria, descripcion)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8edeb',
        flex: 1,
        alignItems: 'center'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 30,
    },
    box: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#e8a598',
        borderColor: '#000',
        borderRadius: 8,
        width: '70%',
        height: 40,
        paddingHorizontal: 12,
    }
})