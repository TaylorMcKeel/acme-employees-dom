const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep'},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ];

  const nameContainer = document.getElementById('employees')

const showEmployees = ()=>{
    let names = []
    employees.forEach((entry) => {
        names.push(entry.name)
    })

    nameContainer.innerHTMl = names

}







const render = ()=>{
    const html = data.map(num => {
        return `<li>${num}</ls>`
    }).join('')
    list.innerHTML = html
}