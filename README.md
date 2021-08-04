# Endpoints

## Articles

| Method  | Path                                        | Description                                         |
|---------|---------------------------------------------|-----------------------------------------------------|
| GET     | /articles                                   | Get a list of articles entries                      |
| GET     | /articles/{slug}                            | Get one article by slug with two suggestions        |
| GET     | /articles/?categories.name={categoryName}   | Get a list of articles by category name (Query)     |
| GET     | /articles?categories.id={categoryId}        | Get a list of articles by category id (Query)       |
| GET     | /articles/category/{categoryName}           | Get a list of articles by category name (Parameter) |
| GET     | /articles?author.name={authorName}          | Get a list of articles by author name (Query)       |
| GET     | /articles?author.id={authorId}              | Get a list of articles by author id (Query)         |
| GET     | /articles/author/{authorName}               | Get a list of articles by author name (Parameter)   |
