import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import PokeLoader from './PokeLoader'
import SearchBody from './SearchBody'
import { Header, Input, Item, Icon, Button } from 'native-base'

const Search = ({ switcher }) => {

  const [search, setSearch] = useState('')
  const [onCall, setOnCall] = useState(true)

  const searchPoke = () => {
  }

  const renderBody = () => {
    if (onCall) {
      return <PokeLoader />
    } else {
      return <SearchBody />
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        searchBar
        rounded
      >
        <Item>
          <Icon name="ios-search" onPress={searchPoke} />
          <Input
            value={search}
            placeholder="Search Pokemon"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Item>

      </Header>
    </View>
  )
}

export default Search