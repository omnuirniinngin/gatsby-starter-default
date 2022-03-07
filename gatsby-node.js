exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/projects",
    component: require.resolve("./src/templates/single-page.js"),
    context: {},
    defer: true,
  })
}
