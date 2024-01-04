import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { ref, onValue } from "firebase/database";
import { db } from '../Config/Config';

export default function InformacionScreen() {

    const [id, setId] = useState('')

    const [datos, setDatos] = useState([])

    useEffect(() => {

        function leer() {
            const starCountRef = ref(db, 'gastos/');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();

                //adaptacion del arreglo
                const dataTemp: any = Object.keys(data).map((id) => ({
                    id, ...data[id]
                }))

                setDatos(dataTemp)
            });
        }

        leer()
        console.log(datos)


    }, [])

    console.log(datos)

    type gastos = {
        monto: string,
        categoria: string,
        descripcion: string
    }

    return (
        <View style={styles.container}>
            <Text style={styles.bold}>Información de gastos</Text>
            <View style={styles.onerow}>
                <TextInput
                    placeholder='Ingrese el ID'
                    onChangeText={(texto) => setId(texto)}
                    style={styles.box}
                />
                <Button title='Buscar' />
            </View>
            <FlatList
                data={datos}
                renderItem={({ item }: { item: gastos }) => (
                    <View>
                        <View style={styles.onerow}>
                            <Text style={{marginRight:30}}>Monto: {item.monto}</Text>
                            <Text>Categoría: {item.categoria}</Text>
                        </View>
                        <Text style={styles.bold}>Descripción</Text>
                        <Text>{item.descripcion}</Text>
                    </View>
                )}
            />
            <Text>━━━━━━━━━━━━━━━✧⊕✧━━━━━━━━━━━━━━━</Text>
            <Text style={styles.bold}>Más Registros</Text>
            <FlatList
                data={datos}
                renderItem={({ item }: { item: gastos }) => (
                    <View>
                        <TouchableOpacity
                        onPress={() => {
                            const categoria = item.categoria;
                            const descripcion = item.descripcion;
                        
                            Alert.alert('Información del gasto', `
                              Categoría: ${categoria}
                              Descripción: ${descripcion}
                            `, [
                              { text: 'Aceptar', onPress: () => {} },
                            ]);
                          }}
                        >
                            <Text>Monto: {item.monto}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8edeb',
        flex: 1,
        alignItems: 'center'
    },
    onerow: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 30,
    },
    box: {
        backgroundColor: '#e8a598',
        borderRadius: 8,
        width: '40%',
        height: 40,
        paddingHorizontal: 12,
        marginRight: 50
    }
})