import React from 'react'
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import SearchBar from 'material-ui-search-bar'

interface Props {
  setSearchValue: (searchValue: string) => void
  searchValue: string
}

const Search = (props: Props) => {
  const { setSearchValue, searchValue } = props

  return (
    <SearchBar
      style={{
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
        minWidth: 250,
      }}
      value={searchValue}
      onChange={(value) => setSearchValue(value)}
    />
  )
}

export default Search
