import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(res => {
      console.log('Dados da API', res.data)
      setProjects(res.data)
    })
  }, [])

  async function handleAddProject() {
    const res = await api.post('projects', {
      title: `Novo Projeto - ${Date.now()}`,
      owner: 'Mayron Souza'
    })

    const project = res.data

    setProjects([...projects, project])
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
      
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText} >Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project: {
    fontSize: 20,
    color: '#fff',
  },

  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',

  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#7159c1'
  },
})