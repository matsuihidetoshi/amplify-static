function send() {
  let title = document.forms.contact_form.title.value
  let contact = document.forms.contact_form.contact.value
  let content = document.forms.contact_form.content.value
  console.log(title)
  console.log(contact)
  console.log(content)
  axios.post('https://i2h95g9vki.execute-api.ap-northeast-1.amazonaws.com/default/sesContact',
  {
    contact: contact,
    title: title,
    content: content,
  }).then(response => (
    console.log(response)
  )).catch(error => (
    console.log(error)
  )).finally(
    console.log('done')
  )
}