fetch('https://reqres.in/api/users?page=2')
.then(res=>res.json())
.then(result=>{
    output=''
    for(let i=0;i<result['data'].length;i++){
        user=result['data'][i]
        output+=` <tr>
            <td class="table-warning">${user.id}</td>
            <td class="table-danger">${user.email}</td>
            <td class="table-info">${user.first_name}</td>
            <td class="table-warning">${user.last_name}</td>
            <td class="table-danger"><img src="${user.avatar}" alt=""></td>`
    }
    console.table(result['data'])
    document.getElementById('records').innerHTML = output
})