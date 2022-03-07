exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/projects",
    component: require.resolve("./src/templates/singlePage.js"),
    context: {},
    defer: true,
  })
}
