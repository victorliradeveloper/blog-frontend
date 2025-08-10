import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import StyledSearchPost from './SearchPost.styled'
import { SearchPostProps } from './SearchPost.types'
import { usePosts } from '@/presentation/hooks/usePosts'
import { useSearchContext } from '@/Context/searchContext'

function SearchPost({
  displaySearch = false,
  onCloseSearch,
  onCloseMobileMenu,
}: SearchPostProps) {
  const [enabled, setEnabled] = useState(false)
  const router = useRouter()

  const { query, setQuery, setSearchedPosts } = useSearchContext()

  const { data } = usePosts({
    query,
    page: '1',
    limit: '8',
    enabled,
  })

  useEffect(() => {
    if (data?.results) {
      setSearchedPosts(data.results)
    }
  }, [data, setSearchedPosts])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    if (event.key === 'Enter') {
      const value = target.value.trim()
      if (value) {
        setQuery(value)
        setEnabled(true)
        router.push(`/?query=${encodeURIComponent(value)}`)
      }
      onCloseSearch()
    }
  }

  const handleIconClick = () => {
    const inputElement = document.querySelector('.search') as HTMLInputElement
    const value = inputElement?.value.trim()

    if (value) {
      setQuery(value)
      setEnabled(true)
      router.push(`?query=${encodeURIComponent(value)}`)
    }
    onCloseMobileMenu()
    onCloseSearch()
  }

  if (!displaySearch) return null

  return (
    <StyledSearchPost>
      <div className="search-wrapper">
        <input
          className="search"
          type="search"
          placeholder="Pesquisar"
          onKeyDown={handleKeyDown}
        />
        <div className="search-grey-icon">
          <p>Aperte enter para buscar</p>
          <Image
            src="/search-gray.png"
            alt="Ícone de busca cinza"
            onClick={handleIconClick}
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="overlay" onClick={onCloseSearch}></div>
    </StyledSearchPost>
  )
}

export default SearchPost
