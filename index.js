const {client} = require('tre-client')
const Tree = require('tre-treeview')

client( (err, ssb, config) => {
  console.log('tre config', config.tre)
  if (err) return console.error(err)
  const renderTree = Tree(ssb)
  document.body.appendChild(
    renderTree({
      key: config.tre.branches.root,
      value: {
        content: {
          name: 'root'
        }
      }
    })
  )
}) 
