export const listUsers = (event) => {
  const response = JSON.stringify({
    statusCode: 200,
    users: [
      {
        id: 1,
        name: "Yan da silva cerqueira",
        email: "yansilvacerqueira@outlook.com"
      }
    ]
  })

  return response;
}