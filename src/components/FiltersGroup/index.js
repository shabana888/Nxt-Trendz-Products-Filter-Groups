import './index.css'

const FiltersGroup = props => {
  const renderCategories = () => {
    const {categoryDetails, categoryId} = props
    return categoryDetails.map(eachCategory => {
      const {changeCategory} = props
      const categoryClicked = () => {
        changeCategory(eachCategory.categoryId)
        const active = categoryId === eachCategory.categoryId
        console.log(active)
      }

      return (
        <li
          key={eachCategory.categoryId}
          onClick={categoryClicked}
          className="category"
        >
          <p>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const renderRatingList = () => {
    const {ratingDetails} = props
    return ratingDetails.map(eachRating => {
      const {changeRating} = props
      const onClickedRating = () => {
        changeRating(eachRating.ratingId)
      }

      return (
        <li
          onClick={onClickedRating}
          key={eachRating.ratingId}
          className="rating"
        >
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="image"
          />
          <p className="rating-name">& up</p>
        </li>
      )
    })
  }

  const onChangeInput = event => {
    const {changeInput} = props
    changeInput(event.target.value)
  }

  const searchingProducts = event => {
    const {searching} = props
    if (event.key === 'Enter') {
      searching()
    }
  }

  const {searchInput} = props

  const clearFilter = () => {
    const {clearingFilters} = props
    clearingFilters()
  }

  return (
    <div className="filters-group-container">
      <div>
        <input
          type="search"
          placeholder="Search"
          onChange={onChangeInput}
          onKeyDown={searchingProducts}
          value={searchInput}
        />
        <h1 className="heading">Category</h1>
        <ul className="container">{renderCategories()}</ul>
        <h1 className="heading">Rating</h1>
        <ul>{renderRatingList()}</ul>
        <button type="button" onClick={clearFilter} className="button">
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
